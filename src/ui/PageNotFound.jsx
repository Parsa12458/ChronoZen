const PageNotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div
            className="h-96 w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            }}
          >
            <h1 className="text-8xl">404</h1>
          </div>
          <div className="mt-8">
            <h3 className="mb-4 text-2xl">Look like you're lost</h3>
            <p className="mb-8">
              The page you are looking for is not available!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
