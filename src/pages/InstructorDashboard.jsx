import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function InstructorDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page">
      <nav className="navbar">
        <Link to="/" className="logo">
          LearnHub 🎓
        </Link>

        <div className="nav-links">
          <Link to="/courses">Courses</Link>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard">
        <div className="dashboard-header">
          <div>
            <span className="badge">INSTRUCTOR</span>

            <h1>
              Welcome{user?.name ? `, ${user.name}` : ""}! 👨‍🏫
            </h1>

            <p>
              Manage your courses and students.
            </p>
          </div>

          <button className="primary-button">
            + Create Course
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>📚</span>
            <h2>6</h2>
            <p>Total Courses</p>
          </div>

          <div className="stat-card">
            <span>👨‍🎓</span>
            <h2>124</h2>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <span>📈</span>
            <h2>78%</h2>
            <p>Average Completion</p>
          </div>
        </div>

        <section className="dashboard-section">
          <h2>Your Courses</h2>

          <div className="learning-card">
            <div>
              <span className="course-category">
                Development
              </span>

              <h3>Web Development</h3>

              <p>
                12 lessons • 45 students
              </p>
            </div>

            <button className="secondary-button">
              Manage
            </button>
          </div>

          <div className="learning-card">
            <div>
              <span className="course-category">
                Programming
              </span>

              <h3>Python Programming</h3>

              <p>
                16 lessons • 32 students
              </p>
            </div>

            <button className="secondary-button">
              Manage
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InstructorDashboard;