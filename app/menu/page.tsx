import Link from "next/link";

interface MenuItem {
  image: string;
  name: string;
}

const laMain: MenuItem[] = [
  { image: "noodle-1.jpg", name: "Jiang Mu Ji La Mian" },
  { image: "noodle-2.jpg", name: "Assorted Braised Beef La Mian" },
  { image: "noodle-3.jpg", name: "Hong Shao Beef Noodles" },
  { image: "noodle-4.jpg", name: "Beef Slice La Mian" },
  { image: "noodle-5.jpg", name: "Dry Mala La Mian w Salt & Pepper Chicken" },
  { image: "noodle-6.jpg", name: "Dry Mala La Mian w Chicken Cutlet" },
  { image: "noodle-7.jpg", name: "Oyster Mee Sua" },
];

const rice: MenuItem[] = [
  { image: "rice-1.jpg", name: "Signature XO Fried Rice" },
  { image: "rice-2.jpg", name: "Lu Rou Fan (Beef)" },
  { image: "rice-3.jpg", name: "Chicken Sesame Rice" },
  { image: "rice-4.jpg", name: "Spam Egg Rice" },
  { image: "rice-5.jpg", name: "Shrimp Egg Rice" },
  { image: "rice-6.jpg", name: "Chicken Cutlet Egg Rice" },
  { image: "rice-7.jpg", name: "Beef Egg Rice" },
];

const vegetables: MenuItem[] = [
  { image: "vege-1.jpg", name: "Poached Lettuce" },
  { image: "vege-2.jpg", name: "Stir-Fried Cabbage" },
];

const snacks: MenuItem[] = [
  { image: "snack-1.jpg", name: "Xiao Long Bao" },
  { image: "snack-2.jpg", name: "Mala Xiao Long Bao" },
  { image: "snack-3.jpg", name: "Taiwan Sweet Potato" },
  { image: "snack-4.jpg", name: "Deep Fried Xiao Long Bao" },
  { image: "snack-5.jpg", name: "Deep Fried Mala Xiao Long Bao" },
  { image: "snack-6.jpg", name: "XXL Chicken Cutlet" },
  { image: "snack-7.jpg", name: "Cong Zua Bing" },
  { image: "snack-8.jpg", name: "Salt and Pepper Chicken" },
  { image: "snack-9.jpg", name: "Saliva Chicken" },
  { image: "snack-10.jpg", name: "Sweet Potato Fries" },
  { image: "snack-11.jpg", name: "French Fries (Mala)" },
  { image: "snack-12.jpg", name: "French Fries (Seaweed)" },
];

function MenuSection({
  title,
  chinese,
  items,
}: {
  title: string;
  chinese: string;
  items: MenuItem[];
}) {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="font-bebas text-red-brand text-3xl md:text-4xl tracking-[2px] inline">
          {title}
        </h2>
        <span className="text-navy text-2xl md:text-3xl ml-3">{chinese}</span>
        <div className="w-24 h-1 bg-red-brand mx-auto mt-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="overflow-hidden rounded-xl mb-3">
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
            <p className="font-playfair text-navy text-sm md:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative w-full h-[350px] overflow-hidden">
        <img
          src="/images/moodshot-2.jpg"
          alt="Menu banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-bebas text-white/60 text-2xl md:text-4xl tracking-[3px]">
              886 TAIWAN
            </span>
            <h1 className="font-bebas text-white text-5xl md:text-7xl tracking-[4px]">
              YÈSHÌ MENU
            </h1>
            <span className="font-bebas text-white/60 text-2xl md:text-4xl tracking-[3px]">
              886 TAIWAN
            </span>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <MenuSection title="LA MIAN" chinese="面类" items={laMain} />
          <MenuSection title="RICE" chinese="饭类" items={rice} />
          <MenuSection title="VEGETABLES" chinese="蔬菜类" items={vegetables} />
          <MenuSection title="SNACKS" chinese="小吃类" items={snacks} />

          {/* Liang Ban */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-bebas text-red-brand text-3xl md:text-4xl tracking-[2px] inline">
                LIANG BAN
              </h2>
              <span className="text-navy text-2xl md:text-3xl ml-3">
                凉拌类
              </span>
              <div className="w-24 h-1 bg-red-brand mx-auto mt-2" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/liang-ban.jpg"
                alt="Liang Ban"
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="font-bebas bg-red-brand text-white px-8 py-3 text-lg tracking-[2px] rounded hover:bg-red-700 transition"
            >
              VISIT US
            </Link>
            <Link
              href="/menu"
              className="font-bebas border-2 border-navy text-navy px-8 py-3 text-lg tracking-[2px] rounded hover:bg-navy hover:text-white transition"
            >
              VIEW FULL MENU
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
