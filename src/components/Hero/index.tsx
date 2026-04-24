function Hero() {
  return (
    <section className="px-6 pt-16 md:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
          Make Your First <span className="text-blue-600">Impression</span>{" "}
          Count
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-500 sm:max-w-md  md:max-w-xl md:text-lg">
          powerful self-serve product analytics to help you convert engage and
          retain more users
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-4 py-4 md:px-7 text-base font-semibold text-white hover:bg-blue-700 sm:text-lg">
            Get Started
          </button>
          <button className="rounded-xl border border-gray-300 px-4 py-4 md:px-7 text-base font-semibold text-gray-500 hover:bg-gray-50 sm:text-lg">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
