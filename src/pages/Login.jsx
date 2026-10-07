import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Remember where the user was trying to go
  const requestedPage = location.state?.from;

  // Only allow internal LearnHub routes
  const redirectTo =
    typeof requestedPage === "string" &&
    requestedPage.startsWith("/")
      ? requestedPage
      : "/dashboard";

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const savedUser = JSON.parse(
        localStorage.getItem("learnhub-user")
      );

      if (!savedUser) {
        setError(
          "No account found. Please register first."
        );
        setLoading(false);
        return;
      }

      if (
        savedUser.email.toLowerCase() !==
          email.trim().toLowerCase() ||
        savedUser.password !== password
      ) {
        setError("Incorrect email or password.");
        setLoading(false);
        return;
      }

      // Log the user in through AuthContext
      login(savedUser);

      // Return to the page the user originally requested
      navigate(redirectTo, {
        replace: true,
      });
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="auth-page">
        <div className="auth-card">

          {/* HEADER */}
          <div className="auth-header">
            <span className="badge">
              WELCOME BACK
            </span>

            <h1>Login to LearnHub 🎓</h1>

            <p>
              Continue your learning journey.
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="primary-button auth-button"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          {/* REGISTER */}
          <p className="auth-footer">
            Don't have an account?{" "}

            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>
      </main>
    </div>
  );
}

export default Login;