import CircleButton from "./CircleButton";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-7">
      <Logo />
      <CircleButton>
        <img src="/icons/moon-icon.svg" alt="moon icon" className="h-6 w-6" />
      </CircleButton>
    </div>
  );
}

export default Header;
