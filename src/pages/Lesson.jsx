import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";
import Navbar from "../components/Navbar";

function Lesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

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

  const lesson = course.lessons.find(
    (lesson) => lesson.id === Number(lessonId)
  );

  if (!lesson) {
    return (
      <div className="page">
        <main className="lesson-page">

          <h1>Lesson Not Found</h1>

          <p>
            This lesson does not exist in this course.
          </p>

          <Link
            to={`/courses/${course.id}/learn`}
            className="primary-button"
          >
            Back to Lessons
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

  const isCompleted =
    completedLessons.includes(lesson.id);

  const handleComplete = () => {

    if (!completedLessons.includes(lesson.id)) {

      completedLessons.push(lesson.id);

      localStorage.setItem(
        storageKey,
        JSON.stringify(completedLessons)
      );
    }

    navigate(`/courses/${course.id}/learn`);
  };

  return (
    <div className="page">

      <Navbar />

      <main className="lesson-page">

        <Link
          to={`/courses/${course.id}/learn`}
          className="back-link"
        >
          ← Back to Lessons
        </Link>

        <div className="lesson-content">

          <span className="badge">
            {course.title.toUpperCase()}
          </span>

          <h1>
            {lesson.title}
          </h1>

          <p className="lesson-description">
            {lesson.description}
          </p>

          <div className="lesson-body">

            <h2>
              Lesson Content
            </h2>

            {lesson.content.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

          </div>

          {isCompleted ? (

            <div className="completion-section">

              <p className="completed-message">
                🎉 You have already completed this lesson!
              </p>

              <Link
                to={`/courses/${course.id}/learn`}
                className="complete-button"
              >
                Continue to Lessons →
              </Link>

            </div>

          ) : (

            <button
              className="complete-button"
              onClick={handleComplete}
            >
              ✓ Mark Lesson as Complete
            </button>

          )}

        </div>

      </main>

    </div>
  );
}

export default Lesson;