function DarkModeButton() {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mediumGreen bg-lightGreen transition-all duration-300 hover:bg-paleGreen hover:shadow-lg">
      <img src="/icons/moon-icon.svg" alt="moon icon" className="h-6 w-6" />
    </button>
  );
}

export default DarkModeButton;
