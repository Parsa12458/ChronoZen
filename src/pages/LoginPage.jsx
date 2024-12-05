import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Header from "../ui/Header";
import InputField from "../ui/InputField";

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center bg-background py-16">
        <div className="w-96 bg-lightGreen p-9">
          <h2 className="mb-6 text-center text-3xl font-semibold">Login</h2>
          <button className="flex w-full items-center justify-center gap-2 rounded border border-mediumGreen py-1.5 font-semibold">
            <img
              src="/icons/google-icon.svg"
              alt="google icon"
              className="w-6"
            />
            <span>Login with Google</span>
          </button>
          <form className="mt-7 flex flex-col items-stretch space-y-5">
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

          <span className="mt-2.5 inline-block text-sm">
            Forget password? <Link className="underline">Reset password</Link>
          </span>
          <span className="inline-block text-sm">
            Don't have an account?{" "}
            <Link className="underline" to="/signup">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
