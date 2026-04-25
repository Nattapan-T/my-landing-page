import { useState } from "react";

function RequestDemo() {
  const [isDemoRequested, setIsDemoRequested] = useState(false);

  return (
    <section className="mt-24 px-6 md:px-14">
      <div className="mx-auto max-w-4xl text-center flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-gray-900">
          Create Your First Personalized
        </h2>

        <p className="mx-auto max-w-md text-base leading-relaxed text-gray-500 sm:max-w-md  md:max-w-xl md:text-sm">
          No credit card required. 7 days free trial
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="rounded-xl border border-gray-300 px-4 py-4 md:px-7 text-base font-semibold text-gray-500 hover:bg-gray-50 sm:text-lg">
            Get Started
          </button>
          <button
            className="rounded-xl bg-blue-600 px-4 py-4 md:px-7 text-base font-semibold text-white hover:bg-blue-700 sm:text-lg"
            onClick={() => setIsDemoRequested(true)}
          >
            Request a Demo
          </button>
        </div>
        {isDemoRequested && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold text-sm">
              Thank you for your request! We will contact you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
export default RequestDemo;
