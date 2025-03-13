function FullSpinner() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-background">
      <div className="loading loading-dots w-72 bg-primary"></div>
    </div>
  );
}

export default FullSpinner;
