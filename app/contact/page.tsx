export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="/images/886-contact.jpg"
          alt="886 Taiwan Yè Shì interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16">
          <h1 className="font-bebas text-white text-5xl md:text-7xl tracking-[4px] text-center drop-shadow-lg">
            886 TAIWAN YÈ SHÌ
          </h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-red-brand py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center">
          {/* Address */}
          <div>
            <h3 className="font-bebas text-2xl tracking-[2px] mb-3">
              Address
            </h3>
            <p className="font-playfair text-white/90 leading-relaxed">
              65 Airport Boulevard,
              <br />
              Changi Airport, B2-40/40A
              <br />
              Terminal 3
            </p>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-playfair font-bold italic text-white text-4xl md:text-5xl mb-2">
              VISIT US
            </h2>
            <div className="w-32 h-1 bg-white" />
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bebas text-2xl tracking-[2px] mb-3">Hours</h3>
            <p className="font-playfair text-white/90 leading-relaxed">
              Monday - Friday: 11:00 AM - 11:00 PM
              <br />
              Saturday - Sunday: 10:00 AM - 12:00 AM
              <br />
              Closed: Every 2nd Monday
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
