import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

function Menu() {
  return (
    <>
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </>
  );
}

export default Menu;
