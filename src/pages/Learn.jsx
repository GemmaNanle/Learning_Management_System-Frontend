import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const lessons = {
  1: {
    title: "Introduction to Web Development",
    description:
      "Understand how websites work and learn about HTML, CSS and JavaScript.",
    content: [
      {
        heading: "What is Web Development?",
        text:
          "Web development is the process of creating websites and web applications that run on the internet.",
      },
      {
        heading: "HTML",
        text:
          "HTML is used to structure the content of a webpage. It defines elements such as headings, paragraphs, images, links and forms.",
      },
      {
        heading: "CSS",
        text:
          "CSS is used to style webpages. It controls colors, spacing, layouts, typography and the overall visual appearance of a website.",
      },
      {
        heading: "JavaScript",
        text:
          "JavaScript adds interactivity and functionality to websites, allowing pages to respond to user actions.",
      },
    ],
  },

  2: {
    title: "HTML Fundamentals",
    description:
      "Learn how to structure webpages using HTML elements and tags.",
    content: [
      {
        heading: "Introduction to HTML",
        text:
          "HTML stands for HyperText Markup Language and provides the structure of webpages.",
      },
      {
        heading: "HTML Elements",
        text:
          "HTML elements are used to organize content such as headings, paragraphs, images and links.",
      },
      {
        heading: "HTML Structure",
        text:
          "A basic HTML document contains elements such as html, head and body.",
      },
    ],
  },

  3: {
    title: "HTML Forms",
    description:
      "Learn how to create forms and collect information from users.",
    content: [
      {
        heading: "What are Forms?",
        text:
          "HTML forms allow websites to collect information from users.",
      },
      {
        heading: "Form Elements",
        text:
          "Common form elements include input fields, buttons, labels, checkboxes and select menus.",
      },
    ],
  },

  4: {
    title: "CSS Fundamentals",
    description:
      "Learn how to style webpages using CSS.",
    content: [
      {
        heading: "What is CSS?",
        text:
          "CSS controls the appearance and layout of HTML elements.",
      },
      {
        heading: "Selectors",
        text:
          "CSS selectors allow you to target specific HTML elements and apply styles to them.",
      },
    ],
  },
};

function Lesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = lessons[Number(lessonId)];

  const storageKey = `learnhub-course-${courseId}-completed`;

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(storageKey);

    return saved ? JSON.parse(saved) : [];
  });

  const isCompleted = completedLessons.includes(Number(lessonId));

  const totalLessons = 6;

  const progress = Math.round(
    (completedLessons.length / totalLessons) * 100
  );

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(completedLessons)
    );
  }, [completedLessons, storageKey]);

  const markComplete = () => {
    const id = Number(lessonId);

    if (!completedLessons.includes(id)) {
      setCompletedLessons([
        ...completedLessons,
        id,
      ]);
    }
  };

  const goToNextLesson = () => {
    const nextLesson = Number(lessonId) + 1;

    if (nextLesson <= totalLessons) {
      navigate(`/courses/${courseId}/learn/${nextLesson}`);
    } else {
      navigate(`/courses/${courseId}/learn`);
    }
  };

  const goToPreviousLesson = () => {
    const previousLesson = Number(lessonId) - 1;

    if (previousLesson >= 1) {
      navigate(
        `/courses/${courseId}/learn/${previousLesson}`
      );
    } else {
      navigate(`/courses/${courseId}/learn`);
    }
  };

  if (!lesson) {
    return (
      <div className="lesson-page">
        <div className="lesson-container">
          <h1>Lesson Not Found</h1>

          <Link
            to={`/courses/${courseId}/learn`}
            className="lesson-primary-button"
          >
            Back to Lessons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page">

      {/* NAVBAR */}
      <nav className="lesson-navbar">

        <Link to="/" className="lesson-logo">
          LearnHub <span>🎓</span>
        </Link>

        <div className="lesson-nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/courses">Courses</Link>
        </div>

      </nav>


      <main className="lesson-container">

        {/* BACK */}
        <Link
          to={`/courses/${courseId}/learn`}
          className="lesson-back"
        >
          ← Back to Lessons
        </Link>


        {/* TOP HEADER */}
        <section className="lesson-header">

          <div>

            <span className="lesson-badge">
              COURSE LESSON
            </span>

            <h1>{lesson.title}</h1>

            <p>
              {lesson.description}
            </p>

          </div>

          <div className="lesson-number-card">

            <span>LESSON</span>

            <strong>
              {lessonId}
            </strong>

            <small>
              of {totalLessons}
            </small>

          </div>

        </section>


        {/* PROGRESS */}
        <section className="lesson-progress-card">

          <div className="progress-heading">

            <div>
              <span>YOUR PROGRESS</span>
              <strong>
                {progress}% Complete
              </strong>
            </div>

            <span>
              {completedLessons.length} / {totalLessons} lessons
            </span>

          </div>

          <div className="lesson-progress-track">
            <div
              className="lesson-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

        </section>


        {/* MAIN CONTENT */}
        <div className="lesson-layout">

          {/* SIDEBAR */}
          <aside className="lesson-sidebar">

            <div className="sidebar-title">
              <span>COURSE CONTENT</span>
              <strong>Web Development</strong>
            </div>

            <div className="lesson-list">

              {Array.from(
                { length: totalLessons },
                (_, index) => {

                  const id = index + 1;

                  const completed =
                    completedLessons.includes(id);

                  const active =
                    id === Number(lessonId);

                  return (
                    <Link
                      key={id}
                      to={`/courses/${courseId}/learn/${id}`}
                      className={`lesson-sidebar-item ${
                        active ? "active" : ""
                      }`}
                    >

                      <span className="sidebar-number">
                        {completed ? "✓" : id}
                      </span>

                      <div>
                        <strong>
                          Lesson {id}
                        </strong>

                        <small>
                          {completed
                            ? "Completed"
                            : id === Number(lessonId)
                            ? "Currently learning"
                            : "Not started"}
                        </small>
                      </div>

                    </Link>
                  );
                }
              )}

            </div>

          </aside>


          {/* CONTENT */}
          <article className="lesson-content-card">

            <div className="lesson-content-top">

              <span>LESSON {lessonId}</span>

              {isCompleted && (
                <div className="completed-label">
                  ✓ Completed
                </div>
              )}

            </div>


            <div className="lesson-content">

              {lesson.content.map(
                (section, index) => (
                  <section
                    className="lesson-section"
                    key={index}
                  >

                    <h2>
                      {section.heading}
                    </h2>

                    <p>
                      {section.text}
                    </p>

                  </section>
                )
              )}

            </div>


            {/* COMPLETE */}
            {!isCompleted ? (
              <div className="lesson-complete-box">

                <div>
                  <strong>
                    Finished this lesson?
                  </strong>

                  <p>
                    Mark it as complete to track
                    your learning progress.
                  </p>
                </div>

                <button
                  onClick={markComplete}
                  className="complete-button"
                >
                  Mark as Complete ✓
                </button>

              </div>
            ) : (
              <div className="lesson-success">

                <div className="success-icon">
                  ✓
                </div>

                <div>
                  <strong>
                    Lesson completed!
                  </strong>

                  <p>
                    Great job! Keep going with
                    your learning journey.
                  </p>
                </div>

              </div>
            )}


            {/* NAVIGATION */}
            <div className="lesson-navigation">

              <button
                onClick={goToPreviousLesson}
                className="lesson-nav-button secondary"
                disabled={Number(lessonId) === 1}
              >
                ← Previous
              </button>


              <button
                onClick={goToNextLesson}
                className="lesson-nav-button primary"
              >
                {Number(lessonId) === totalLessons
                  ? "Back to Lessons"
                  : "Next Lesson →"}
              </button>

            </div>

          </article>

        </div>

      </main>

    </div>
  );
}

export default Lesson;