import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full hidden md:block transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur border-b border-gray-100"
          : "bg-transparent border-b border-gray-200"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        <div className="flex justify-start">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        <ul className="hidden justify-center gap-8 text-lg  text-gray-500 md:flex">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Product</li>
          <li className="cursor-pointer hover:text-blue-600">Feature</li>
          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        </ul>

        <div className="flex justify-end gap-3">
          <button className="rounded-md border border-gray-300 px-4 py-2 text-lg  text-gray-500 hover:bg-gray-50">
            Sign in
          </button>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-lg  text-white hover:bg-blue-700">
            Sign up free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
