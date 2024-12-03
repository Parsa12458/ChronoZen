import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/icons/logo.svg" alt="ChronoZen logo" className="w-48" />
    </Link>
  );
}

export default Logo;
