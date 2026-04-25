import { useState } from "react";
import logo from "../../assets/logo.png";
import DropdownMenu from "./DropdownMenu";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center md:hidden fixed z-10 w-full">
      <img src={logo} alt="Logo" className="max-h-12 w-auto object-contain" />
      <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default MobileMenu;
