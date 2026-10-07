import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and build modern websites.",
    category: "Development",
    level: "Beginner",
    icon: "💻",
  },
  {
    id: 2,
    title: "React.js",
    description:
      "Build interactive web applications using React.",
    category: "Development",
    level: "Intermediate",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "Learn the fundamentals of protecting systems and networks.",
    category: "Security",
    level: "Beginner",
    icon: "🔐",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "Understand databases, queries and data management.",
    category: "Database",
    level: "Intermediate",
    icon: "🗄️",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Learn how to design useful and beautiful digital products.",
    category: "Design",
    level: "Beginner",
    icon: "🎨",
  },
  {
    id: 6,
    title: "Python Programming",
    description:
      "Start programming with Python and develop practical skills.",
    category: "Programming",
    level: "Beginner",
    icon: "🐍",
  },
];

function Courses() {
  return (
    <div className="courses-container">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="courses-page">

        <section className="courses-hero">
          <span className="badge">
            LEARN • GROW • BUILD
          </span>

          <h1>
            Explore Our <span>Courses</span>
          </h1>

          <p>
            Build valuable skills through practical,
            beginner-friendly courses designed for your
            learning journey.
          </p>
        </section>

        {/* Course statistics */}
        <div className="course-stats">
          <div className="stat-item">
            <strong>6+</strong>
            <span>Courses</span>
          </div>

          <div className="stat-item">
            <strong>3</strong>
            <span>Skill Levels</span>
          </div>

          <div className="stat-item">
            <strong>100%</strong>
            <span>Self-Paced</span>
          </div>
        </div>

        {/* Courses */}
        <section className="course-section">

          <div className="course-section-heading">
            <div>
              <span className="small-heading">
                OUR LEARNING LIBRARY
              </span>

              <h2>Choose your path</h2>
            </div>

            <p>
              Start learning something new today.
            </p>
          </div>

          <div className="course-grid">

            {courses.map((course) => (
              <article
                className="course-card"
                key={course.id}
              >

                <div className="course-card-top">

                  <div className="course-icon">
                    {course.icon}
                  </div>

                  <span className="course-level">
                    {course.level}
                  </span>

                </div>

                <span className="course-category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p className="course-description">
                  {course.description}
                </p>

                <div className="course-divider"></div>

                <div className="course-footer">

                  <span className="course-info">
                    📚 Self-paced
                  </span>

                  <Link
                    to={`/courses/${course.id}`}
                    className="view-course"
                  >
                    View Course
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="courses-footer">
        <p>
          © 2026 LearnHub. Learn today. Build tomorrow. 🚀
        </p>
      </footer>

    </div>
  );
}

export default Courses;