function CircleButton({ children }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-mediumGreen bg-lightGreen outline-none transition-all duration-300 hover:bg-paleGreen hover:shadow-md">
      {children}
    </button>
  );
}

export default CircleButton;
