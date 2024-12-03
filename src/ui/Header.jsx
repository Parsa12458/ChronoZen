import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-7">
      <Logo />
      <DarkModeButton />
    </div>
  );
}

export default Header;
