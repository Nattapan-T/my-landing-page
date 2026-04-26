import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

function RequestDemo() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [showInput, setShowInput] = useState(false);

  const handleGetStarted = async () => {
    if (!email || !email.includes("@")) {
      setState("error");
      return;
    }
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setState("success");
  };

  const isEmailInputValid = email && email.includes("@");

  return (
    <section id="request-demo" className="mt-24 px-6 md:px-14 scroll-mt-24">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          Create Your First Personalized
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-gray-500">
          No credit card required. 7 days free trial
        </p>

        {state === "success" ? (
          <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="green"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
            <p className="text-green-600 font-semibold">
              Thank you for your request!
            </p>
            <p className="text-gray-400 text-sm">
              We'll be in touch at{" "}
              <span className="text-gray-600 font-medium">{email}</span>
            </p>
          </div>
        ) : (
          <>
            <div className="flex gap-3">
              <button
                onClick={handleGetStarted}
                disabled={state === "loading" || !isEmailInputValid}
                className={`rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-500 hover:bg-gray-50 disabled:opacity-60 transition-all${isEmailInputValid ? "animate-pulse shadow-md backdrop-blur" : ""}`}
              >
                {state === "loading" ? "Loading..." : "Get Started"}
              </button>
              <button
                onClick={() => setShowInput(true)}
                className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700"
              >
                Request a Demo
              </button>
            </div>

            {showInput && (
              <div className="flex flex-col items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setState("idle");
                  }}
                  placeholder="Enter your work email"
                  autoFocus
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    !isEmailInputValid
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-300 focus:border-blue-500"
                  }`}
                />
                {!isEmailInputValid && (
                  <p className="text-red-500 text-xs">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default RequestDemo;
