import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="auth-container">
      <div className="auth-card not-found">
        <div className="not-found-number">404</div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link to="/" className="primary-button">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;