export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative w-full h-[260px] sm:h-[450px] md:h-[650px] lg:h-[895px]">
        <img
          src="/images/886 contact image.png"
          alt="886 Taiwan Yè Shì interior"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Info Section */}
      <section className="bg-red-brand py-10 sm:py-14 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center text-white">

          {/* Address */}
          <div className="order-2 md:order-1 text-center md:text-right">
            <h3
              className="font-poppins text-[#FFFADC] text-lg sm:text-xl md:text-2xl tracking-[1px] md:tracking-[2px] leading-relaxed"
            >
              Address:
              <br />
              65 Changi Airport Terminal 3
              <br />
              #B2-40/40A,
              <br />
              Singapore 819663
            </h3>
          </div>

          {/* Visit Us */}
          <div className="order-1 md:order-2 flex flex-col items-center justify-center">
            <h2
              className="font-dincondensed font-bold text-[#FFFADC] text-5xl sm:text-6xl md:text-7xl lg:text-[140px] leading-none mb-3 text-center"
            >
              VISIT US
            </h2>

            <div className="w-32 sm:w-40 md:w-full h-1 bg-[#FFFADC]"/>
          </div>

          {/* Hours */}
          <div className="order-3 text-center md:text-left">
            <h3 className="font-poppins text-[#FFFADC] text-lg sm:text-xl md:text-2xl tracking-[1px] md:tracking-[2px] leading-relaxed">
              Hours:
              <br />
              Daily
              <br />
              10:30 AM – 10:30 PM
            </h3>
          </div>

        </div>
      </section>
    </>
  );
}