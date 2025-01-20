import Header from "../ui/Header";
import LoginForm from "../features/authentication/LoginForm";

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
