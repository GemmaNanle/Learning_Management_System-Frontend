import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import Navbar from "../components/Navbar";

function CourseLearn() {
  const { courseId } = useParams();

  const course = courses.find(
    (course) => course.id === Number(courseId)
  );

  if (!course) {
    return (
      <div className="page">
        <main className="lesson-page">
          <h1>Course Not Found</h1>

          <Link to="/courses" className="primary-button">
            Back to Courses
          </Link>
        </main>
      </div>
    );
  }

  const storageKey =
    `learnhub-course-${course.id}-completed`;

  const completedLessons = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
  );

  const progress = Math.round(
    (completedLessons.length / course.lessons.length) * 100
  );

  return (
    <div className="page">

      <Navbar />

      <main className="lesson-page">

        <Link
          to={`/courses/${course.id}`}
          className="back-link"
        >
          ← Back to Course
        </Link>

        {/* COURSE HEADER */}

        <section className="course-header">

          <span className="badge">
            {course.category.toUpperCase()}
          </span>

          <div
            style={{
              fontSize: "42px",
              marginTop: "15px",
            }}
          >
            {course.icon}
          </div>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="progress-section">

            <strong>
              Course Progress — {progress}%
            </strong>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>

          </div>

        </section>

        {/* LESSONS */}

        <div className="lessons-list">

          {course.lessons.map((lesson, index) => {

            const completed =
              completedLessons.includes(lesson.id);

            return (
              <article
                className="lesson-card"
                key={lesson.id}
              >

                <div className="lesson-number">
                  {completed ? "✓" : index + 1}
                </div>

                <div className="lesson-info">

                  <h2>
                    {lesson.title}
                  </h2>

                  <p>
                    {lesson.description}
                  </p>

                </div>

                {completed ? (

                  <span className="completed">
                    Completed ✓
                  </span>

                ) : (

                  <Link
                    to={`/courses/${course.id}/learn/${lesson.id}`}
                    className="primary-button"
                  >
                    Start →
                  </Link>

                )}

              </article>
            );
          })}

        </div>

      </main>

    </div>
  );
}

export default CourseLearn;