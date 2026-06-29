import Link from "next/link";

export default function PromotionsPage() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="inline-block">
            <span className="font-playfair italic font-bold text-navy text-4xl md:text-5xl">
              PROMOTIONS
            </span>
            <span className="text-navy text-3xl md:text-4xl ml-3">
              限时优惠
            </span>
          </h1>
          <div className="w-48 h-1 bg-red-brand mx-auto mt-3" />
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/promo-poster.jpg"
              alt="Taiwanese Street Food Favourites"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/moodshot-3.jpg"
              alt="Chopstick rice cutlet"
              className="w-full h-full object-cover rounded-xl"
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
  );
}
