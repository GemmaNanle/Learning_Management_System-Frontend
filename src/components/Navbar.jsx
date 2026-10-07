import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      icon: "🎓",
      title: "Keep learning!",
      message: "Continue your course and complete your next lesson.",
      time: "Today",
    },
    {
      id: 2,
      icon: "🔥",
      title: "Keep your streak going",
      message: "You're doing great. Keep learning today!",
      time: "Today",
    },
    {
      id: 3,
      icon: "📚",
      title: "New courses available",
      message: "Explore new courses on LearnHub.",
      time: "Yesterday",
    },
  ];

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    setNotificationsOpen(false);
    setMobileOpen(false);
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const userName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    "User";

  const userInitial = userName
    .charAt(0)
    .toUpperCase();

  return (
    <nav className="home-navbar">

      {/* LOGO */}
      <Link
        to="/"
        className="home-logo"
        onClick={closeMobileMenu}
      >
        LearnHub <span>🎓</span>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <div className="home-nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/courses">
          Courses
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/dashboard">
  Dashboard
</Link>

<Link to="/my-learning">
  My Learning
</Link>

<Link to="/profile">
  Profile
</Link>

<Link to="/settings">
  Settings
</Link>

{/* NOTIFICATIONS */}
<div className="navbar-notification-wrapper">
              <button
                type="button"
                className="navbar-notification"
                title="Notifications"
                onClick={() => {
                  setNotificationsOpen(
                    !notificationsOpen
                  );
                  setMenuOpen(false);
                }}
              >
                🔔

                <span className="notification-dot"></span>
              </button>

              {notificationsOpen && (
                <div className="notification-dropdown">

                  <div className="notification-header">
                    <div>
                      <strong>Notifications</strong>
                      <span>
                        {notifications.length} new
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setNotificationsOpen(false)
                      }
                    >
                      ✕
                    </button>
                  </div>

                  <div className="notification-list">
                    {notifications.map(
                      (notification) => (
                        <div
                          className="notification-item"
                          key={notification.id}
                        >
                          <div className="notification-icon">
                            {notification.icon}
                          </div>

                          <div className="notification-content">
                            <strong>
                              {notification.title}
                            </strong>

                            <p>
                              {notification.message}
                            </p>

                            <small>
                              {notification.time}
                            </small>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    className="view-notifications"
                    onClick={() =>
                      setNotificationsOpen(false)
                    }
                  >
                    View all notifications →
                  </button>

                </div>
              )}
            </div>

            {/* USER MENU */}
            <div className="navbar-user-menu">

              <button
                type="button"
                className="navbar-user-button"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setNotificationsOpen(false);
                }}
              >
                <span className="navbar-avatar">
                  {userInitial}
                </span>

                <span className="navbar-username">
                  {userName}
                </span>

                <span className="navbar-arrow">
                  {menuOpen ? "▲" : "▼"}
                </span>
              </button>

              {menuOpen && (
                <div className="navbar-dropdown">

                  <Link
                    to="/profile"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    👤 Profile
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    ⚙️ Settings
                  </Link>

                  <Link
                    to="/dashboard"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    📊 Dashboard
                  </Link>

                  <div className="dropdown-divider"></div>

                  <button
                    type="button"
                    className="dropdown-logout"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>

                </div>
              )}

            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="home-nav-button"
            >
              Get Started
            </Link>
          </>
        )}

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setNotificationsOpen(false);
        }}
        aria-label="Toggle navigation menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="mobile-nav-menu">

          <Link
            to="/"
            onClick={closeMobileMenu}
          >
            🏠 Home
          </Link>

          <Link
            to="/courses"
            onClick={closeMobileMenu}
          >
            📚 Courses
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={closeMobileMenu}
              >
                📊 Dashboard
              </Link>

              <Link
                to="/courses"
                onClick={closeMobileMenu}
              >
                🎓 My Learning
              </Link>

              <Link
                to="/profile"
                onClick={closeMobileMenu}
              >
                👤 Profile
              </Link>

              <Link
                to="/settings"
                onClick={closeMobileMenu}
              >
                ⚙️ Settings
              </Link>

              <button
                type="button"
                className="mobile-notification"
                onClick={() => {
                  setNotificationsOpen(
                    !notificationsOpen
                  );
                }}
              >
                🔔 Notifications
              </button>

              <button
                type="button"
                className="mobile-logout"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMobileMenu}
              >
                🔐 Login
              </Link>

              <Link
                to="/register"
                className="mobile-get-started"
                onClick={closeMobileMenu}
              >
                🚀 Get Started
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;