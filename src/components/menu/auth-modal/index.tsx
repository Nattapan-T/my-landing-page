type AuthMode = "signin" | "signup" | null;

function AuthModal({
  mode,
  onClose,
  onSwitch,
}: {
  mode: AuthMode;
  onClose: () => void;
  onSwitch: () => void;
}) {
  if (!mode) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors"
          />
          <button
            className="rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
            onClick={onClose}
          >
            {mode === "signin" ? "Sign in" : "Sign up free"}
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-400">
          {mode === "signin" ? "No account? " : "Have an account? "}
          <button onClick={onSwitch} className="text-blue-600 hover:underline">
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </>
  );
}

export default AuthModal;
