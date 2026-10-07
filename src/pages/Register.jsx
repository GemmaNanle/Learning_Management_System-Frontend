import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("learnhub-user")
    );

    if (existingUser && existingUser.email === email) {
      setError("An account with this email already exists.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "learnhub-user",
      JSON.stringify(user)
    );

    alert("Account created successfully! 🎉");

    navigate("/login");
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <section className="register-showcase">

        <Link to="/" className="register-logo">
          LearnHub <span>🎓</span>
        </Link>

        <div className="register-showcase-content">

          <span className="register-badge">
            ✦ START YOUR JOURNEY
          </span>

          <h1>
            Learn today.
            <br />
            <span>Grow tomorrow.</span>
          </h1>

          <p>
            Create your LearnHub account and gain access
            to practical courses designed to help you
            build valuable skills for your future.
          </p>

          <div className="register-benefits">

            <div>
              <span>✓</span>
              <p>Learn at your own pace</p>
            </div>

            <div>
              <span>✓</span>
              <p>Explore practical courses</p>
            </div>

            <div>
              <span>✓</span>
              <p>Track your learning progress</p>
            </div>

          </div>

        </div>

        <div className="register-decoration">
          🚀
        </div>

      </section>


      {/* RIGHT SIDE */}
      <section className="register-form-section">

        <div className="register-card">

          <div className="register-header">

            <span className="register-small-badge">
              CREATE ACCOUNT
            </span>

            <h2>
              Join LearnHub
            </h2>

            <p>
              Create your account and start learning.
            </p>

          </div>


          {error && (
            <div className="register-error">
              <span>!</span>
              {error}
            </div>
          )}


          <form onSubmit={handleRegister}>

            {/* NAME */}
            <div className="register-form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>


            {/* EMAIL */}
            <div className="register-form-group">

              <label htmlFor="register-email">
                Email Address
              </label>

              <input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* PASSWORD */}
            <div className="register-form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <input
                id="register-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <small>
                Minimum 6 characters
              </small>

            </div>


            {/* CONFIRM PASSWORD */}
            <div className="register-form-group">

              <label htmlFor="confirm-password">
                Confirm Password
              </label>

              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="register-submit-button"
            >
              Create Account
              <span>→</span>
            </button>

          </form>


          <div className="register-divider">
            <span></span>
            <p>Already a member?</p>
            <span></span>
          </div>


          <Link
            to="/login"
            className="register-login-button"
          >
            Sign In to LearnHub
          </Link>


          <p className="register-footer">
            By creating an account, you agree to use
            LearnHub for educational purposes.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Register;