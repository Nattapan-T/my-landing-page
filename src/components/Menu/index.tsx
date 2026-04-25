import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

function Menu() {
  return (
    <>
      <div id="menu" className="hidden md:block">
        <NavBar />
      </div>
      <div id="mobile-menu" className="block md:hidden">
        <MobileMenu />
      </div>
    </>
  );
}

export default Menu;
