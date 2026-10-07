import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCompletedLessons, getCourseProgress } from "../utils/progress";

const courses = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    totalLessons: 12,
    category: "Development",
  },
  {
    id: 2,
    title: "React.js",
    icon: "⚛️",
    totalLessons: 10,
    category: "Development",
  },
  {
    id: 3,
    title: "Cyber Security",
    icon: "🔐",
    totalLessons: 8,
    category: "Security",
  },
];

function Progress() {
  const courseProgress = courses.map((course) => {
    const completedLessons =
      getCompletedLessons(course.id);

    const progress = getCourseProgress(
      course.id,
      course.totalLessons
    );

    return {
      ...course,
      completedLessons: completedLessons.length,
      progress,
    };
  });

  const totalLessons = courses.reduce(
    (total, course) =>
      total + course.totalLessons,
    0
  );

  const completedLessons =
    courseProgress.reduce(
      (total, course) =>
        total + course.completedLessons,
      0
    );

  const completedCourses =
    courseProgress.filter(
      (course) => course.progress === 100
    ).length;

  const overallProgress = totalLessons
    ? Math.round(
        (completedLessons / totalLessons) * 100
      )
    : 0;

  return (
    <div className="progress-page">
      <Navbar />

      <main className="progress-container">

        {/* HEADER */}
        <section className="progress-header">
          <span className="section-badge">
            YOUR PROGRESS
          </span>

          <h1>Track your learning 📈</h1>

          <p>
            See how far you've come and keep
            working toward your goals.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="progress-overview">

          <div className="progress-overview-card">
            <div className="progress-circle">
              <span>{overallProgress}%</span>
            </div>

            <div>
              <span className="progress-card-label">
                Overall Progress
              </span>

              <h3>
                {overallProgress >= 75
                  ? "You're doing great! 🔥"
                  : overallProgress > 0
                  ? "Keep going! 🚀"
                  : "Let's get started! 🎓"}
              </h3>
            </div>
          </div>

          <div className="progress-stat-card">
            <span>📚</span>
            <strong>{courses.length}</strong>
            <small>Courses</small>
          </div>

          <div className="progress-stat-card">
            <span>✅</span>
            <strong>{completedLessons}</strong>
            <small>Lessons Completed</small>
          </div>

          <div className="progress-stat-card">
            <span>🏆</span>
            <strong>{completedCourses}</strong>
            <small>Courses Completed</small>
          </div>

        </section>

        {/* COURSE PROGRESS */}
        <section className="progress-courses">

          <div className="progress-section-heading">
            <div>
              <h2>Course Progress</h2>
              <p>
                Your progress across all courses.
              </p>
            </div>
          </div>

          <div className="progress-course-list">

            {courseProgress.map((course) => (
              <article
                className="progress-course-card"
                key={course.id}
              >
                <div className="progress-course-icon">
                  {course.icon}
                </div>

                <div className="progress-course-info">
                  <div className="progress-course-title">
                    <div>
                      <span>
                        {course.category}
                      </span>

                      <h3>{course.title}</h3>
                    </div>

                    <strong>
                      {course.progress}%
                    </strong>
                  </div>

                  <div className="progress-bar">
                    <div
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>

                  <div className="progress-course-footer">
                    <span>
                      {course.completedLessons} of{" "}
                      {course.totalLessons} lessons
                    </span>

                    {course.progress === 100 ? (
                      <span className="progress-complete">
                        ✓ Completed
                      </span>
                    ) : (
                      <Link
                        to={`/courses/${course.id}/learn`}
                      >
                        {course.progress > 0
                          ? "Continue →"
                          : "Start →"}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}

          </div>
        </section>

      </main>
    </div>
  );
}

export default Progress;