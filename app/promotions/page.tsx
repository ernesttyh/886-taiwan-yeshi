import Link from "next/link";

export default function PromotionsPage() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex gap-2 sm:gap-3">
            {/* Red Heading */}
            <div className="inline-block">
              <h1 className="font-dincondensed font-bold text-[#CE2C20] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] tracking-[2px] leading-none">
                PROMOTIONS
              </h1>

              <div className="h-[3px] bg-[#CE2C20] w-full mt-2" />
            </div>

            {/* Chinese Text */}
            <span className="text-[#053176] text-3xl sm:text-4xl md:text-7xl lg:text-[90px] tracking-[2px] font-aaHongYunShouShu font-bold leading-none">
              限时优惠
            </span>
          </div>
        </div>
        {/*  */}
        {/* <div className="text-center mb-12">
          <h1 className="inline-block">
            <span className="font-dincondensed font-bold text-[#CE2C20] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] tracking-[2px] inline">
              PROMOTIONS
            </span>
            <span className="text-[#053176] text-3xl sm:text-4xl md:text-7xl lg:text-[90px] tracking-[2px] ml-2 sm:ml-3 font-aaHongYunShouShu font-bold">
              限时优惠
            </span>
          </h1>
          <div className="w-48 h-1 bg-red-brand mx-auto mt-3" />
        </div> */}

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
          {/* <div className="overflow-hidden">
            <img
              src="/images/promotions-new-image.png"
              alt="Taiwanese Street Food Favourites"
              className="w-full h-full object-cover"
            />
          </div> */}
          <div className="overflow-hidden">
            <img
              src="/images/886 Opening promo_somec_FA.jpg"
              alt="Taiwanese Street Food Favourites"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
  );
}
