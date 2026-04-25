import growTogetherImage from "../../assets/grow-together.png";

function GrowTogether() {
  return (
    <section className="mt-24 px-6 md:px-14 flex flex-col items-center">
      <div className="mx-auto max-w-lg text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Let's grow together
        </h2>
        <p className="text-base leading-relaxed text-gray-400">
          Explore out full hiring platform with a 15 days free trial no credit
          card required. Post jobs get candidates and manage applicants all in
          one place.
        </p>
        <button className="rounded-xl bg-blue-600 px-10 py-4 text-base font-semibold text-white hover:bg-blue-700">
          Try it for free
        </button>
      </div>

      <img src={growTogetherImage} alt="grow together" className="mt-12" />
    </section>
  );
}
export default GrowTogether;
