import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const { signup, isLoading } = useSignup();

  async function onSubmit({ email, password, fullName }) {
    signup({ fullName, email, password });
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="flex flex-grow items-center justify-center bg-background py-16">
      <div className="w-96 bg-lightGreen p-9">
        <h2 className="mb-6 text-center text-3xl font-semibold">Signup</h2>
        <button className="flex w-full items-center justify-center gap-2 rounded border border-mediumGreen py-1.5 font-semibold">
          <img src="/icons/google-icon.svg" alt="google icon" className="w-6" />
          <span>Signup with Google</span>
        </button>
        <form
          className="mt-7 flex flex-col items-stretch space-y-5"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <InputField
            id="fullName"
            label="Full Name"
            placeHolder="Enter your full name"
            type="text"
            register={register}
            validationRules={{ required: "Full name is required" }}
          />
          <InputField
            id="email"
            label="Email Address"
            placeHolder="example@gmail.com"
            type="email"
            register={register}
            validationRules={{
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
          <InputField
            id="password"
            label="Password"
            placeHolder="Enter your password"
            type="password"
            register={register}
            validationRules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
          />
          <Button type="submit" variation="primary" additionalStyles="!mt-8">
            Start your journey!
          </Button>
        </form>
        <span className="mt-2.5 inline-block text-sm">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupForm;
