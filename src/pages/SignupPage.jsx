import Button from "../ui/Button";
import Header from "../ui/Header";
import InputField from "../ui/InputField";

function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center bg-background py-16">
        <div className="w-96 bg-lightGreen px-9 py-10 text-center">
          <h2 className="mb-6 text-3xl font-semibold">Signup</h2>
          <button className="flex w-full items-center justify-center gap-2 rounded border border-mediumGreen py-1.5 font-semibold">
            <img
              src="/icons/google-icon.svg"
              alt="google icon"
              className="w-6"
            />
            <span>Signup with Google</span>
          </button>
          <form className="mt-7 flex flex-col items-stretch space-y-5">
            <InputField
              id="name"
              label="Full Name"
              placeHolder="Enter your full name"
              type="text"
            />
            <InputField
              id="email"
              label="Email Address"
              placeHolder="example@gmail.com"
              type="email"
            />
            <InputField
              id="password"
              label="Password"
              placeHolder="Enter your password"
              type="password"
            />
            <Button type="submit" variation="primary" additionalStyles="!mt-8">
              Start your journey!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
