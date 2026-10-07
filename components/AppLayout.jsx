import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function AppLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Courses",
      path: "/courses",
      icon: "📚",
    },
    {
      name: "My Learning",
      path: "/learn",
      icon: "🎓",
    },
    {
      name: "Progress",
      path: "/progress",
      icon: "📊",
    },
    {
      name: "Achievements",
      path: "/achievements",
      icon: "🏆",
    },
  ];

  const accountItems = [
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`app-layout ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>

      {/* SIDEBAR */}
      <aside className="app-sidebar">

        <div className="sidebar-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">LearnHub</span>
        </div>

        <div className="sidebar-section">

          <p className="sidebar-title">
            MAIN MENU
          </p>

          <nav className="sidebar-nav">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>
              </NavLink>
            ))}

          </nav>

        </div>


        <div className="sidebar-section">

          <p className="sidebar-title">
            ACCOUNT
          </p>

          <nav className="sidebar-nav">

            {accountItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>
              </NavLink>
            ))}

          </nav>

        </div>


        <div className="sidebar-bottom">

          <button
            className="sidebar-link logout-button"
            onClick={handleLogout}
          >
            <span className="sidebar-icon">
              🚪
            </span>

            <span>
              Logout
            </span>
          </button>

        </div>

      </aside>


      {/* MAIN AREA */}
      <div className="app-main">

        {/* TOP BAR */}
        <header className="app-header">

          <button
            className="menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>


          <div className="header-search">

            <span>
              🔍
            </span>

            <input
              type="text"
              placeholder="Search courses, lessons..."
            />

          </div>


          <div className="header-actions">

            <button className="header-icon-button">
              🔔
            </button>

            <button
              className="header-profile"
              onClick={() => navigate("/profile")}
            >

              <div className="avatar">
                👤
              </div>

              <div className="header-user">

                <strong>
                  Student
                </strong>

                <span>
                  Learner
                </span>

              </div>

            </button>

          </div>

        </header>


        {/* PAGE CONTENT */}
        <main className="app-content">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default AppLayout;