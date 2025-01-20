import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import FullSpinner from "./FullSpinner";

function ProtectedRoute({ children, navigateUrl = "/signup" }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  const condition =
    navigateUrl === "/signup"
      ? !isAuthenticated && !isLoading
      : isAuthenticated && !isLoading;
  useEffect(
    function () {
      if (condition) navigate(navigateUrl);
    },
    [isAuthenticated, isLoading, navigate, navigateUrl, condition],
  );

  if (isLoading) return <FullSpinner />;

  if (
    navigateUrl === "/signup"
      ? isAuthenticated && !isLoading
      : !isAuthenticated && !isLoading
  )
    return children;
}

export default ProtectedRoute;
