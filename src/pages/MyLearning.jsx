import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCourseProgress } from "../utils/progress";

const enrolledCourses = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    icon: "💻",
    description:
      "Learn HTML, CSS and JavaScript and build modern websites.",
    totalLessons: 12,
  },
  {
    id: 2,
    title: "React.js",
    category: "Development",
    icon: "⚛️",
    description:
      "Build interactive and modern web applications using React.",
    totalLessons: 10,
  },
  {
    id: 3,
    title: "Cyber Security",
    category: "Security",
    icon: "🔐",
    description:
      "Learn the fundamentals of protecting systems and networks.",
    totalLessons: 8,
  },
];

function MyLearning() {
  const coursesWithProgress = enrolledCourses.map(
    (course) => ({
      ...course,
      progress: getCourseProgress(
        course.id,
        course.totalLessons
      ),
    })
  );

  const inProgress = coursesWithProgress.filter(
    (course) =>
      course.progress > 0 && course.progress < 100
  );

  const completed = coursesWithProgress.filter(
    (course) => course.progress === 100
  );

  const notStarted = coursesWithProgress.filter(
    (course) => course.progress === 0
  );

  return (
    <div className="my-learning-page">
      <Navbar />

      <main className="my-learning-container">

        {/* HEADER */}
        <section className="my-learning-header">
          <div>
            <span className="section-badge">
              MY LEARNING
            </span>

            <h1>
              Continue your learning journey 🎓
            </h1>

            <p>
              Pick up where you left off and keep
              building your skills.
            </p>
          </div>

          <Link
            to="/courses"
            className="browse-courses-button"
          >
            Browse Courses →
          </Link>
        </section>

        {/* CONTINUE LEARNING */}
        {inProgress.length > 0 && (
          <section className="learning-section">
            <div className="learning-section-heading">
              <div>
                <h2>Continue Learning</h2>
                <p>
                  Pick up where you left off.
                </p>
              </div>
            </div>

            <div className="learning-course-grid">
              {inProgress.map((course) => (
                <article
                  className="learning-course-card"
                  key={course.id}
                >
                  <div className="learning-course-top">
                    <div className="learning-course-icon">
                      {course.icon}
                    </div>

                    <span>
                      {course.category}
                    </span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="learning-progress-info">
                    <span>Progress</span>
                    <strong>
                      {course.progress}%
                    </strong>
                  </div>

                  <div className="learning-progress">
                    <div
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>

                  <Link
                    to={`/courses/${course.id}/learn`}
                    className="continue-learning-button"
                  >
                    Continue Learning →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* COMPLETED COURSES */}
        {completed.length > 0 && (
          <section className="learning-section">
            <div className="learning-section-heading">
              <div>
                <h2>Completed Courses</h2>
                <p>
                  Courses you've successfully completed.
                </p>
              </div>
            </div>

            <div className="learning-course-grid">
              {completed.map((course) => (
                <article
                  className="learning-course-card completed-card"
                  key={course.id}
                >
                  <div className="learning-course-top">
                    <div className="learning-course-icon">
                      {course.icon}
                    </div>

                    <span className="completed-label">
                      ✓ Completed
                    </span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="learning-progress-info">
                    <span>Progress</span>
                    <strong>100%</strong>
                  </div>

                  <div className="learning-progress">
                    <div
                      style={{
                        width: "100%",
                      }}
                    ></div>
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="continue-learning-button"
                  >
                    View Course →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* NOT STARTED */}
        {notStarted.length > 0 && (
          <section className="learning-section">
            <div className="learning-section-heading">
              <div>
                <h2>Start Learning</h2>
                <p>
                  Courses waiting for you to begin.
                </p>
              </div>
            </div>

            <div className="learning-course-grid">
              {notStarted.map((course) => (
                <article
                  className="learning-course-card"
                  key={course.id}
                >
                  <div className="learning-course-top">
                    <div className="learning-course-icon">
                      {course.icon}
                    </div>

                    <span>
                      {course.category}
                    </span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="learning-progress-info">
                    <span>Progress</span>
                    <strong>0%</strong>
                  </div>

                  <div className="learning-progress">
                    <div
                      style={{
                        width: "0%",
                      }}
                    ></div>
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="continue-learning-button"
                  >
                    Start Learning →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default MyLearning;