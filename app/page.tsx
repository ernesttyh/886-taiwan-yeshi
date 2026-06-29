import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <img
          src="/images/hero-food.jpg"
          alt="Hero food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-bebas text-white text-7xl md:text-[80px] tracking-[6px]">
            WELCOME
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-cream py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="mb-10">
            <span className="text-navy text-3xl md:text-4xl">故 </span>
            <span className="font-playfair font-bold text-navy text-3xl md:text-4xl">
              OUR STORY
            </span>
            <span className="text-navy text-3xl md:text-4xl"> 事</span>
          </h2>

          {/* Story Image */}
          <div className="max-w-2xl mx-auto mb-10">
            <img
              src="/images/our-story.jpg"
              alt="Cooking wok scene"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Quote */}
          <h3 className="font-playfair font-bold italic text-navy text-2xl md:text-3xl mb-6">
            FOOD IS THE HEART OF{" "}
            <span className="underline decoration-red-brand decoration-4 underline-offset-8">
              CULTURE
            </span>
          </h3>

          {/* Body Text */}
          <p className="font-playfair text-navy/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the authentic flavors of Taiwan&apos;s vibrant night
            markets, brought to life in every dish we serve. At 886 Taiwan Yè
            Shì, we believe food is more than sustenance — it&apos;s a bridge
            between cultures, a celebration of tradition, and a journey for the
            senses.
          </p>

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

      {/* Gallery Section */}
      <section className="bg-navy py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/moodshot-1.jpg"
              alt="Food bowls"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/moodshot-2.jpg"
              alt="886 t-shirt"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/moodshot-3.jpg"
              alt="Chopstick rice cutlet"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
