import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import Navbar from "../components/Navbar";

function CourseDetails() {
  const { courseId } = useParams();

  const course = courses.find(
    (course) => course.id === Number(courseId)
  );

  if (!course) {
    return (
      <div className="page">
        <nav className="navbar">
          <Link to="/" className="logo">
            LearnHub 🎓
          </Link>

          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Courses</Link>
          </div>
        </nav>

        <main className="course-details">
          <div className="course-details-card">
            <h1>Course Not Found</h1>

            <p>
              The course you are looking for does not exist.
            </p>

            <Link to="/courses" className="primary-button">
              Back to Courses
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">

      <Navbar />

      <main className="course-details">

        <Link
          to="/courses"
          className="back-link"
        >
          ← Back to Courses
        </Link>

        <div className="course-details-card">

          <div className="course-details-icon">
            {course.icon}
          </div>

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p className="course-description">
            {course.description}
          </p>

          <div className="course-info">

            <div>
              <strong>Level</strong>
              <span>{course.level}</span>
            </div>

            <div>
              <strong>Lessons</strong>
              <span>{course.lessons.length}</span>
            </div>

            <div>
              <strong>Progress</strong>
              <span>0%</span>
            </div>

          </div>

          <Link
            to={`/courses/${course.id}/learn`}
            className="primary-button"
          >
            Start Learning →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default CourseDetails;