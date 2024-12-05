import CircleButton from "./CircleButton";

function AppHeader() {
  return (
    <div className="col-start-2 col-end-3 flex items-center gap-10 px-10 py-8 font-semibold">
      <div>
        Good Afternoon, <span className="font-bold">Parsa!</span>
      </div>
      <div className="ml-auto">Monday, November 25, 2024</div>
      <div className="flex items-center justify-center gap-2">
        <CircleButton>
          <img src="/icons/moon-icon.svg" alt="moon icon" className="h-6 w-6" />
        </CircleButton>
        <CircleButton>
          <img src="/icons/user.svg" alt="user icon" className="h-6 w-6" />
        </CircleButton>
      </div>
    </div>
  );
}

export default AppHeader;
