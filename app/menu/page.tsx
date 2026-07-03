import Link from "next/link";

interface MenuItem {
  image: string;
  name: string;
}

const laMain: MenuItem[] = [
  { image: "JiangMuJiLaMian.png", name: "Jiang Mu Ji La Mian" },
  { image: "AssortedBeefLa Mian.png", name: "Assorted Beef La Mian" },
  { image: "Hong Shao Beef La Mian.png", name: "Hong Shao Beef La Mian" },
  { image: "Beef Slice La Mian.png", name: "Beef Slice La Mian" },
  { image: "Dry Mala La Mian w Salt & Pepper Chicken.png", name: "Dry Mala La Mian w Salt & Pepper Chicken" },
  { image: "Dry Mala La Mian w Chicken Cutlet.png", name: "Dry Mala La Mian w Chicken Cutlet" },
  { image: "Oyster Mee Sua.png", name: "Oyster Mee Sua" },
];

const rice: MenuItem[] = [
  { image: "rice-1.png", name: "Signature XO Fried Rice" },
  { image: "rice-2.png", name: "Lu Rou Fan (Beef)" },
  { image: "rice-3.png", name: "Chicken Sesame Rice" },
  { image: "rice-4.png", name: "Spam Egg Rice" },
  { image: "rice-5.png", name: "Shrimp Egg Rice" },
  { image: "rice-6.png", name: "Chicken Cutlet Egg Rice" },
  { image: "rice-7.png", name: "Beef Egg Rice" },
];

const vegetables: MenuItem[] = [
  { image: "vege-1.png", name: "Poached Lettuce" },
  { image: "vege-2.png", name: "Stir-Fried Cabbage" },
];

const snacks: MenuItem[] = [
  { image: "snack-1.png", name: "Chicken Xiao Long Bao" },
  { image: "snack-2.png", name: "Mala Xiao Long Bao" },
  { image: "snack-3.png", name: "Assorted Deep Fried Xiao Long Bao" },
  { image: "snack-4.png", name: "Taiwan Sweet Potato Ball" },
  { image: "snack-5.png", name: "XXL Fried Chicken" },
  { image: "snack-6.png", name: "Scallion Pancake" },
  { image: "snack-7.png", name: "Deep Fried Oyster" },
  { image: "snack-8.png", name: "Saliva Chicken" },
  { image: "snack-9.png", name: "Hand Shredded Chicken" },
  { image: "snack-10.png", name: "Sweet Potato Fries" },
  { image: "snack-11.png", name: "Mala French Fries" },
  { image: "snack-12.png", name: "Seaweed French Fries" },
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
  <div className="mb-12 md:mb-16">

    <div className="text-center mb-10 md:mb-16">
      <div className="inline-flex gap-2 sm:gap-3">
        {/* Red Heading */}
        <div className="inline-block">
          <h2 className="font-dincondensed font-bold text-[#CE2C20] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] tracking-[2px] leading-none">
            {title}
          </h2>

          <div className="h-[3px] bg-[#CE2C20] w-full mt-2" />
        </div>

        {/* Chinese Text */}
        <span className="text-[#053176] text-3xl sm:text-4xl md:text-7xl lg:text-[90px] tracking-[2px] font-aaHongYunShouShu font-bold leading-none">
          {chinese}
        </span>
      </div>
    </div>

    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-8 gap-y-6 md:gap-y-10 "
    >
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <div className="overflow-hidden mb-3">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className=" w-full h-[180px] sm:h-[260px] md:h-[360px] object-cover "
            />
          </div>

          <p
            className=" font-inter text-left text-[#CE3020] text-sm sm:text-lg md:text-[24px] font-semibold leading-tight "
          >
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
      <section className="relative w-full h-[280px] sm:h-[450px] md:h-[650px] lg:h-[895px]">
        <img
          src="/images/menu-hero-banner.png"
          alt="Menu banner"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10 md:pb-14">
          <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 px-4">

            <span
              className=" font-poppins font-bold text-[#FFFADC] text-center text-xs sm:text-lg md:text-2xl lg:text-[35px] tracking-[2px] leading-tight "
            >
              886
              <br />
              TAIWAN
            </span>

            <h1
              className=" font-poppins font-bold text-[#FFFADC] text-3xl sm:text-5xl md:text-7xl lg:text-[100px] tracking-[2px] md:tracking-[4px] leading-none text-center "
            >
              YÈSHÌ MENU
            </h1>

            <span
              className=" font-poppins font-bold text-[#FFFADC] text-center text-xs sm:text-lg md:text-2xl lg:text-[35px] tracking-[2px] leading-tight "
            >
              886
              <br />
              TAIWAN
            </span>

          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section
        className="bg-[#FFFADC] py-10 sm:py-14 md:py-16 px-4 sm:px-6"
      >
        <div className="max-w-[1300px] mx-auto">

          <MenuSection
            title="LA MIAN"
            chinese="面类"
            items={laMain}
          />

          <MenuSection
            title="RICE"
            chinese="饭类"
            items={rice}
          />

          <MenuSection
            title="VEGETABLES"
            chinese="青菜"
            items={vegetables}
          />

          <MenuSection
            title="SNACKS"
            chinese="小吃"
            items={snacks}
          />

          {/* Liang Ban */}
          <div className="mb-14 md:mb-20">


            <div className="text-center mb-10 md:mb-16">
              <div className="inline-flex gap-2 sm:gap-3">
                {/* Red Heading */}
                <div className="inline-block">
                  <h2 className="font-dincondensed font-bold text-[#CE2C20] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] tracking-[2px] leading-none">
                    LIANG BAN
                  </h2>

                  <div className="h-[3px] bg-[#CE2C20] w-full mt-2" />
                </div>

                {/* Chinese Text */}
                <span className="text-[#053176] text-3xl sm:text-4xl md:text-7xl lg:text-[90px] tracking-[2px] font-aaHongYunShouShu font-bold leading-none">
                  凉拌类
                </span>
              </div>
            </div>
          
            <div className="overflow-hidden">

              <img
                src="/images/Liang ban 1.png"
                alt="Liang Ban"
                className="w-full object-cover"
              />

            </div>

          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >

            <Link
              href="/contact"
              className="w-full sm:w-auto text-center font-dincondensed font-bold bg-[#053176] text-[#FFFADC] px-8 py-3 text-base sm:text-lg tracking-[2px] transition hover:opacity-90 "
            >
              VISIT US
            </Link>

            <Link
              href="https://drive.google.com/file/d/1HwrvWIG6y46W9ceXwAOq17yKMj8rnUCH/view?usp=sharing"
              target="_blank"
              className=" w-full sm:w-auto text-center font-dincondensed font-bold bg-[#CE2C20] text-[#FFFADC] px-8 py-3 text-base sm:text-lg tracking-[2px] transition hover:opacity-90 "
            >
              VIEW FULL MENU
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
