import SignupForm from "../features/authentication/SignupForm";
import Header from "../ui/Header";

function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SignupForm />
    </div>
  );
}

export default SignupPage;
