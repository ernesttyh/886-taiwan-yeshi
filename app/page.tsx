import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[450px] sm:h-[600px] md:h-[895px]">
        <img
          src="/images/hero-food.jpg"
          alt="Hero food"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-start justify-center">
          <h1
            className="font-poppins font-bold text-[#FFFADC] text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mt-8 sm:mt-10 md:mt-[40px] tracking-[3px] md:tracking-[6px] "
          >
            WELCOME
          </h1>
        </div>
      </section>


      {/* Our Story Section */}
      <section
        id="our-story"
        className="bg-[#FFFADC] py-12 sm:py-16 md:py-24 px-5 sm:px-6"
      >
        <div className="max-w-[1400px] mx-auto text-center">

          {/* Heading */}
          <h2
            className=" mb-5 text-5xl sm:text-6xl md:text-7xl leading-tight font-bold "
          >
            <span className="text-[#053176] font-aaHongYunShouShu lg:text-[90px]">
              故
            </span>

            <span className="font-dincondensed font-bold text-[#053176] mx-3 lg:text-[100px]">
              OUR STORY
            </span>

            <span className="text-[#053176] font-aaHongYunShouShu lg:text-[90px]">
              事
            </span>
          </h2>


          {/* Story Image */}
          <div
            className=" max-w-[1100px] w-full mx-auto mb-8 sm:mb-10 "
          >
            <img
              src="/images/ourstory.png"
              alt="Cooking wok scene"
              className="w-full rounded-xl sm:rounded-2xl object-cover "
            />
          </div>


          {/* Quote */}
          <h3
            className="font-dincondensed font-bold text-[#053176] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-tight mb-4 "
          >
            FOOD IS THE HEART OF{" "}
            <span
              className="underline decoration-[#053176] decoration-4 underline-offset-4 md:underline-offset-8 "
            >
              CULTURE
            </span>
          </h3>


          {/* Body Text */}
          <p
            className=" font-inter font-medium text-[#053176] text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed "
          >
            Experience the authentic flavors of Taiwan's vibrant night
            markets. From steaming dumplings to braised beef noodles,
            every dish tells a story of tradition and innovation.
          </p>


          {/* Buttons */}
          <div
            className=" flex flex-col sm:flex-row items-center justify-center gap-4 "
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto font-dincondensed font-bold bg-[#053176] text-[#FFFADC] px-8 py-3 text-base sm:text-lg tracking-[2px]"
            >
              VISIT US
            </Link>


            <Link
              href="https://drive.google.com/file/d/1HwrvWIG6y46W9ceXwAOq17yKMj8rnUCH/view"
              target="_blank"
              className=" w-full sm:w-auto font-dincondensed font-bold bg-red-brand text-[#FFFADC] px-8 py-3 text-base sm:text-lg tracking-[2px] "
            >
              VIEW FULL MENU
            </Link>
          </div>

        </div>
      </section>



      {/* Gallery Section */}
      <section
        className=" bg-[#053176] pt-12 sm:pt-[70px] pb-14 sm:pb-[90px] px-5 sm:px-6 "
      >

        <div
          className=" max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 "
        >

          {/* Image 1 */}
          <div
            className=" overflow-hidden md:mt-[90px] "
          >
            <img
              src="/images/moodshot-1.jpg"
              alt="Food bowls"
              className=" w-full object-cover "
            />
          </div>


          {/* Image 2 */}
          <div className="overflow-hidden">
            <img
              src="/images/moodshot-2.jpg"
              alt="886 t-shirt"
              className=" w-full object-cover "
            />
          </div>


          {/* Image 3 */}
          <div
            className=" overflow-hidden md:mt-[80px] "
          >
            <img
              src="/images/moodshot-3.jpg"
              alt="Chopstick rice cutlet"
              className=" w-full object-cover "
            />
          </div>

        </div>

      </section>
    </>
  );
}