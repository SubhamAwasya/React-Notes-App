import "./css/NotFound404.css";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="home-link">
        <span>Go back to home</span>
      </Link>
    </div>
  );
}

export default NotFound404;
