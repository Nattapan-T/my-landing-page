function Hero() {
  return (
    <section id="hero" className="mt-24 md:mt-40 px-6 scroll-mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Make Your First <span className="text-blue-600">Impression</span>{" "}
          Count
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-500 md:max-w-xl md:text-lg">
          powerful self-serve product analytics to help you convert engage and
          retain more users
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700">
            Get Started
          </button>
          <button className="rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-500 hover:bg-gray-50">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
