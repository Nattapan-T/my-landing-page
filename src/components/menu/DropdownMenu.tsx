import { useState } from "react";
import { navItems } from "./navItems";
import AuthModal from "./auth-modal";

function DropdownMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [authMode, setAuthMode] = useState<"signin" | "signup" | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transition-all duration-300 ${isOpen ? "rotate-90" : ""}`}
        >
          {isOpen ? (
            <path d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-10 md:hidden bg-white transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-8 gap-20">
          <ul className="flex flex-col text-gray-600 text-lg">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="py-4 border-b border-gray-300 cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 text-lg">
            <button
              onClick={() => {
                setAuthMode("signin");
                setIsOpen(false);
              }}
              className="w-full rounded-md border px-4 py-3 border-gray-300 text-gray-500 hover:bg-gray-50"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setAuthMode("signup");
                setIsOpen(false);
              }}
              className="w-full rounded-md bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
            >
              Sign up free
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSwitch={() =>
          setAuthMode(authMode === "signin" ? "signup" : "signin")
        }
      />
    </>
  );
}

export default DropdownMenu;
