/**
 * The menu. This file renders the /menu page AND the schema.org Menu graph.
 * Prices: fill `price` (SGD, number) from the POS export. Items without a price render without one.
 * Images live in /public/images and were taken from the 886 brand kit.
 */

export type Tag = "signature" | "bestseller" | "spicy" | "veg";

export interface MenuItem {
  id: string;
  name: string;
  cn: string;
  desc?: string;
  price?: number;
  /** e.g. Chicken / Mala variants with their own prices */
  variants?: { name: string; price?: number }[];
  tags?: Tag[];
  image?: string; // /images/… (376×356 transparent-background shot)
}

export interface MenuGroup {
  title: string;
  cn?: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: string;
  cn: string; // brush-script badge text
  lead?: string;
  layout: "cards" | "list";
  items?: MenuItem[];
  /** extra plain-text rows under the cards (sides without photos) */
  more?: MenuItem[];
  groups?: MenuGroup[];
  image?: { src: string; alt: string };
}

export const menu: MenuSection[] = [
  {
    id: "signature",
    title: "Signature",
    cn: "招牌",
    lead: "Start here if it's your first time.",
    layout: "cards",
    items: [
      {
        id: "trio",
        name: "Signature Trio Bowl Set",
        cn: "招牌三拼",
        desc: "Three little bowls: Lu Rou Fan (Beef), Oyster Mee Sua and Scallion Oil Chicken Rice. The night market in one tray.",
        tags: ["bestseller"],
      },
      {
        id: "xxl-chicken",
        name: "XXL Fried Chicken",
        cn: "豪大鸡排",
        desc: "The night-market icon. A giant cutlet, shatteringly crisp, dusted with pepper-salt.",
        tags: ["signature"],
        image: "/images/menu-xxl-fried-chicken.webp",
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles · La Mian",
    cn: "面类",
    lead: "Hand-pulled la mian in slow-simmered broths, or tossed dry with mala sauce.",
    layout: "cards",
    items: [
      { id: "hong-shao", name: "Hong Shao Beef La Mian", cn: "红烧牛肉拉面", desc: "Braised beef chunks, bok choy, rich soy-braise broth.", tags: ["bestseller"], image: "/images/menu-hong-shao-beef-la-mian.webp" },
      { id: "assorted-beef", name: "Assorted Beef La Mian", cn: "三宝牛肉拉面", desc: "Beef slices, braised beef and tendon in one bowl.", image: "/images/menu-assorted-beef-la-mian.webp" },
      { id: "jiang-mu-ji", name: "Jiang Mu Ji La Mian", cn: "姜母鸡拉面", desc: "Warming ginger chicken broth with a whole chicken leg.", image: "/images/menu-jiang-mu-ji-la-mian.webp" },
      { id: "beef-slice", name: "Beef Slice La Mian", cn: "牛肉片拉面", desc: "Tender beef slices, clear broth, greens.", image: "/images/menu-beef-slice-la-mian.webp" },
      { id: "mala-sp-chicken", name: "Dry Mala La Mian w Salt & Pepper Chicken", cn: "盐酥鸡麻辣干拌拉面", desc: "Numbing-spicy dry noodles topped with crispy salt & pepper chicken.", tags: ["spicy"], image: "/images/menu-dry-mala-la-mian-salt-pepper-chicken.webp" },
      { id: "mala-cutlet", name: "Dry Mala La Mian w Chicken Cutlet", cn: "鸡排麻辣干拌拉面", desc: "Same mala toss, crowned with a fried chicken cutlet.", tags: ["spicy"], image: "/images/menu-dry-mala-la-mian-chicken-cutlet.webp" },
      { id: "oyster-mee-sua", name: "Oyster Mee Sua", cn: "蚵仔面线", desc: "Silky mee sua, plump oysters, black vinegar, garlic.", tags: ["signature"], image: "/images/menu-oyster-mee-sua.webp" },
    ],
  },
  {
    id: "rice",
    title: "Rice Bowls",
    cn: "饭类",
    lead: "Lu rou fan, scallion-oil chicken and silky egg rice bowls.",
    layout: "cards",
    items: [
      { id: "xo-fried-rice", name: "Signature XO Fried Rice", cn: "招牌XO炒饭", desc: "Wok-fried with house XO sauce and prawns.", tags: ["signature"], image: "/images/menu-signature-xo-fried-rice.webp" },
      { id: "lu-rou-fan", name: "Lu Rou Fan (Beef)", cn: "卤肉饭（牛）", desc: "Soy-braised beef over rice, with a braised egg.", tags: ["bestseller"], image: "/images/menu-lu-rou-fan-beef.webp" },
      { id: "scallion-chicken-rice", name: "Scallion Oil Chicken Rice", cn: "葱油鸡饭", desc: "Hand-shredded chicken, fragrant scallion oil.", image: "/images/menu-scallion-oil-chicken-rice.webp" },
      { id: "spam-egg-rice", name: "Spam Egg Rice", cn: "午餐肉滑蛋饭", desc: "Crisp luncheon meat on silky scrambled egg.", image: "/images/menu-spam-egg-rice.webp" },
      { id: "shrimp-egg-rice", name: "Shrimp Egg Rice", cn: "虾仁滑蛋饭", desc: "Sweet prawns, silky egg, rice.", image: "/images/menu-shrimp-egg-rice.webp" },
      { id: "cutlet-egg-rice", name: "Chicken Cutlet Egg Rice", cn: "鸡排滑蛋饭", desc: "Fried cutlet on silky egg rice.", image: "/images/menu-chicken-cutlet-egg-rice.webp" },
      { id: "beef-egg-rice", name: "Beef Egg Rice", cn: "牛肉滑蛋饭", desc: "Seared beef on silky egg rice.", image: "/images/menu-beef-egg-rice.webp" },
    ],
  },
  {
    id: "sides",
    title: "Sides & Snacks",
    cn: "小吃",
    lead: "Night-market bites — share them, or don't.",
    layout: "cards",
    items: [
      {
        id: "fried-xlb",
        name: "Assorted Deep Fried Xiao Long Bao",
        cn: "双拼炸小笼包",
        desc: "Golden, crackly and still soupy inside.",
        variants: [
          { name: "Chicken"},
          { name: "Mala"},
          { name: "Assorted"},
        ],
        tags: ["bestseller"],
        image: "/images/menu-deep-fried-xiao-long-bao.webp",
      },
      { id: "scallion-pancake", name: "Scallion Pancake", cn: "大葱葱油饼", desc: "Flaky, layered, pan-crisped.", tags: ["veg"], image: "/images/menu-scallion-pancake.webp" },
      { id: "saliva-chicken", name: "Saliva Chicken", cn: "口水鸡", desc: "Poached chicken in numbing chilli oil.", tags: ["spicy"], image: "/images/menu-saliva-chicken.webp" },
      { id: "hand-shredded-chicken", name: "Hand Shredded Chicken", cn: "手撕鸡", desc: "Cold, hand-torn, dressed with sesame and coriander.", image: "/images/menu-hand-shredded-chicken.webp" },
      { id: "sweet-potato-ball", name: "Taiwan Sweet Potato Ball", cn: "台湾地瓜球", desc: "Chewy, hollow, golden.", tags: ["veg"], image: "/images/menu-taiwan-sweet-potato-ball.webp" },
      { id: "fried-oyster", name: "Deep Fried Oyster", cn: "炸蚵仔", desc: "Crisp oysters with basil and pepper-salt.", image: "/images/menu-deep-fried-oyster.webp" },
      { id: "mala-fries", name: "Mala French Fries", cn: "麻辣薯条", desc: "Fries tossed in mala spice.", tags: ["spicy", "veg"], image: "/images/menu-mala-french-fries.webp" },
      { id: "sweet-potato-fries", name: "Sweet Potato Fries", cn: "台湾地瓜薯条", desc: "Taiwanese sweet-potato fries.", tags: ["veg"], image: "/images/menu-sweet-potato-fries.webp" },
      { id: "seaweed-fries", name: "Seaweed French Fries", cn: "海苔薯条", desc: "Fries with toasted seaweed.", tags: ["veg"], image: "/images/menu-seaweed-french-fries.webp" },
    ],
    more: [
      { id: "sp-chicken", name: "Salt & Pepper Chicken", cn: "盐酥鸡" },
      { id: "hong-you-chao-shou", name: "Hong You Chao Shou", cn: "红油抄手", tags: ["spicy"] },
      { id: "sp-fries", name: "Salt & Pepper Fries", cn: "盐酥薯条", tags: ["veg"] },
      { id: "corn-fries", name: "Salt & Pepper Corn Fries", cn: "椒盐玉米", tags: ["veg"] },
      { id: "tea-leaf-egg", name: "Tea Leaf Egg", cn: "茶叶蛋", tags: ["veg"] },
      { id: "egg-tarts", name: "Mini Premium Egg Tarts (3 pcs)", cn: "迷你精品蛋挞", tags: ["veg"] },
    ],
  },
  {
    id: "vegetables",
    title: "Vegetables",
    cn: "蔬菜",
    layout: "cards",
    items: [
      { id: "poached-lettuce", name: "Poached Lettuce", cn: "白灼生菜", desc: "Blanched lettuce, soy, crispy shallots.", tags: ["veg"], image: "/images/menu-poached-lettuce.webp" },
      { id: "cabbage", name: "Stir-Fried Cabbage", cn: "清炒高丽菜", desc: "Sweet Taiwanese cabbage, garlic, wok heat.", tags: ["veg"], image: "/images/menu-stir-fried-cabbage.webp" },
    ],
  },
  {
    id: "liangban",
    title: "Liang Ban · Cold Plates",
    cn: "凉拌",
    lead: "Little cold dishes to pick at while the noodles come.",
    layout: "list",
    image: { src: "/images/menu-liang-ban-platter.webp", alt: "Liang ban cold plates: tea eggs, edamame, cucumber, jellyfish, mala mushroom and asam guava" },
    items: [
      { id: "mala-mushroom", name: "Mala Mushroom", cn: "麻辣香菇", tags: ["spicy", "veg"] },
      { id: "jellyfish", name: "Jellyfish", cn: "海蜇" },
      { id: "edamame", name: "Edamame", cn: "毛豆", tags: ["veg"] },
      { id: "cucumber", name: "Cucumber", cn: "小黄瓜", tags: ["veg"] },
      { id: "asam-guava", name: "Asam Guava", cn: "甘梅芭乐", tags: ["veg"] },
      { id: "danshui-egg", name: "Taiwan Danshui Egg (5 pcs)", cn: "淡水铁蛋" },
      { id: "mala-clam", name: "Mala Clam", cn: "麻辣蛤蜊", tags: ["spicy"] },
    ],
  },
  {
    id: "soy",
    title: "Soy King · Soy Milk & Soy Pudding",
    cn: "豆浆",
    lead: "Fresh soy milk, Taiwan-style you tiao, and 豆花 the traditional way or the new way.",
    layout: "list",
    items: [
      { id: "soy-set", name: "Soy Milk w You Tiao Set", cn: "豆浆油条套餐", tags: ["signature"] },
      { id: "you-tiao", name: "Taiwan Signature You Tiao", cn: "台湾招牌油条" },
      { id: "soy-milk", name: "Soy Milk (Iced / Warm)", cn: "豆浆", tags: ["veg"] },
      { id: "soy-pudding-sig", name: "Signature Soy Pudding", cn: "招牌豆花", desc: "Taro ball, grass jelly, red bean, brown-sugar pearls", tags: ["veg"] },
      { id: "soy-pudding-modern", name: "Modern Soy Pudding", cn: "新派豆花", desc: "Taro ball, grass jelly, mango & water-chestnut popping balls, brown-sugar pearls", tags: ["veg"] },
      { id: "soy-pudding-plain", name: "Soy Pudding (Plain)", cn: "原味豆花", tags: ["veg"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    cn: "饮料",
    lead: "Bubble tea, Taiwanese teas, coffee and sodas.",
    layout: "list",
    groups: [
      {
        title: "Signature Drinks",
        cn: "特调",
        items: [
          { id: "bubble-milk-tea", name: "Signature Bubble Milk Tea (Red / Jasmine)", cn: "招牌珍珠奶茶", tags: ["bestseller"] },
          { id: "blue-lagoon", name: "Blue Lagoon Lemonade", cn: "蓝色珊瑚礁" },
          { id: "mojito-lime", name: "Mojito Lime", cn: "青柠莫吉托" },
          { id: "sour-plum-guava", name: "Sour Plum Guava", cn: "芭乐梅" },
          { id: "peach-jasmine", name: "Peach Jasmine Tea", cn: "水蜜桃茉莉茶" },
        ],
      },
      {
        title: "Tea",
        cn: "茶饮",
        items: [
          { id: "cold-brew", name: "Cold Brew Tea", cn: "冷泡茶" },
          { id: "red-tea", name: "Red Tea (Hot)", cn: "红茶" },
          { id: "chrysanthemum", name: "Chrysanthemum Tea (Hot)", cn: "菊花茶" },
          { id: "rose-tea", name: "Rose Tea (Hot)", cn: "玫瑰花茶" },
          { id: "jasmine-tea", name: "Jasmine Tea (Hot)", cn: "茉莉绿茶" },
        ],
      },
      {
        title: "Coffee",
        cn: "咖啡",
        items: [
          { id: "latte", name: "Latte (Iced / Hot)", cn: "拿铁" },
          { id: "long-black", name: "Long Black (Iced / Hot)", cn: "美式" },
          { id: "cappuccino", name: "Cappuccino (Iced / Hot)", cn: "卡布奇诺" },
        ],
      },
      {
        title: "Soft Drinks",
        cn: "气泡水",
        items: [
          { id: "sour-plum-coke", name: "Sour Plum Coke", cn: "梅子可乐" },
          { id: "salty-lime", name: "Salty Lime Lemonade", cn: "咸柠檬水" },
          { id: "coke", name: "Coke / Coke Zero", cn: "可口可乐" },
          { id: "sprite", name: "Sprite", cn: "雪碧" },
        ],
      },
    ],
  },
];

/** Dishes featured on the home page, in order. */
export const featured = [
  "hong-shao",
  "lu-rou-fan",
  "xxl-chicken",
  "oyster-mee-sua",
  "fried-xlb",
] as const;

export function allItems(): MenuItem[] {
  return menu.flatMap((s) => [...(s.items ?? []), ...(s.more ?? []), ...(s.groups?.flatMap((g) => g.items) ?? [])]);
}

export function findItem(id: string): MenuItem | undefined {
  return allItems().find((i) => i.id === id);
}

export const categoryLinks = menu.map((s) => ({ id: s.id, title: s.title.split(" · ")[0], cn: s.cn }));
