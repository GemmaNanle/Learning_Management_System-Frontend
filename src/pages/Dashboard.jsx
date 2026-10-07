import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getCompletedLessons,
  getCourseProgress,
} from "../utils/progress";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // =========================
  // WEB DEVELOPMENT LESSONS
  // =========================
  const lessons = [
    {
      id: 1,
      title: "Introduction to Web Development",
    },
    {
      id: 2,
      title: "HTML Fundamentals",
    },
    {
      id: 3,
      title: "HTML Forms",
    },
    {
      id: 4,
      title: "CSS Fundamentals",
    },
    {
      id: 5,
      title: "JavaScript Basics",
    },
    {
      id: 6,
      title: "Building Your First Website",
    },
  ];

  // =========================
  // PROGRESS STATE
  // =========================
  const [completedLessons, setCompletedLessons] = useState([]);

  // =========================
  // LOAD PROGRESS
  // =========================
  const loadProgress = () => {
    const savedLessons = getCompletedLessons(1);

    setCompletedLessons(savedLessons);
  };

  useEffect(() => {
    loadProgress();

    // Refresh progress when user returns to the page
    const handleFocus = () => {
      loadProgress();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // =========================
  // CALCULATE PROGRESS
  // =========================
  const totalLessons = lessons.length;

  const progress = getCourseProgress(
    1,
    totalLessons
  );

  // =========================
  // FIND NEXT LESSON
  // =========================
  const nextLesson =
    lessons.find(
      (lesson) => !completedLessons.includes(lesson.id)
    ) || lessons[lessons.length - 1];

  // =========================
  // LOGOUT
  // =========================


  // =========================
  // CONTINUE LEARNING
  // =========================
  const handleContinueLearning = () => {
    navigate(`/courses/1/learn/${nextLesson.id}`);
  };

  return (
    <div className="dashboard-page">

      {/* =====================================
          NAVBAR
      ====================================== */}
      <Navbar />


      {/* =====================================
          MAIN DASHBOARD
      ====================================== */}
      <main className="dashboard-container">


        {/* =====================================
            HERO
        ====================================== */}
        <section className="dashboard-hero">

          <div className="dashboard-welcome">

            <span className="dashboard-badge">
              STUDENT DASHBOARD
            </span>

            <h1>
              Welcome back
              {user?.name
                ? `, ${user.name}`
                : ""}! 👋
            </h1>

            <p>
              Keep learning, keep growing, and
              build skills that will shape your
              future.
            </p>

            <div className="dashboard-actions">

              <Link
                to="/courses"
                className="dashboard-primary-btn"
              >
                Explore Courses
                <span>→</span>
              </Link>

              <button
                onClick={handleContinueLearning}
                className="dashboard-secondary-btn"
              >
                Continue Learning
              </button>

            </div>

          </div>


          {/* HERO ILLUSTRATION */}
          <div className="dashboard-hero-illustration">

            <div className="hero-circle">
              🎓
            </div>

            <div className="floating-card floating-card-one">
              📚
              <span>
                Keep Learning
              </span>
            </div>

            <div className="floating-card floating-card-two">
              ⭐
              <span>
                {progress === 100
                  ? "Course Complete!"
                  : "Great Progress!"}
              </span>
            </div>

          </div>

        </section>


        {/* =====================================
            STATISTICS
        ====================================== */}
        <section className="dashboard-stats">


          {/* ENROLLED COURSES */}
          <div className="dashboard-stat-card">

            <div className="stat-icon purple">
              📚
            </div>

            <div>
              <span>
                Active Course
              </span>

              <strong>
                1
              </strong>
            </div>

          </div>


          {/* COMPLETED LESSONS */}
          <div className="dashboard-stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>
                Completed Lessons
              </span>

              <strong>
                {completedLessons.length}
              </strong>
            </div>

          </div>


          {/* OVERALL PROGRESS */}
          <div className="dashboard-stat-card">

            <div className="stat-icon orange">
              🎯
            </div>

            <div>
              <span>
                Overall Progress
              </span>

              <strong>
                {progress}%
              </strong>
            </div>

          </div>


          {/* LESSONS REMAINING */}
          <div className="dashboard-stat-card">

            <div className="stat-icon blue">
              📖
            </div>

            <div>
              <span>
                Lessons Remaining
              </span>

              <strong>
                {totalLessons -
                  completedLessons.length}
              </strong>
            </div>

          </div>

        </section>


        {/* =====================================
            CONTINUE LEARNING
        ====================================== */}
        <section className="dashboard-content">

          <div className="section-title">

            <div>

              <span>
                KEEP GOING
              </span>

              <h2>
                Continue Learning
              </h2>

            </div>

            <Link to="/courses">
              View all courses →
            </Link>

          </div>


          <div className="continue-card">


            {/* COURSE ICON */}
            <div className="continue-icon">
              💻
            </div>


            {/* COURSE INFORMATION */}
            <div className="continue-info">

              <div className="continue-top">

                <span>
                  DEVELOPMENT
                </span>

                <small>
                  {progress}% Complete
                </small>

              </div>


              <h3>
                Web Development
              </h3>


              <p>
                Continue learning HTML, CSS
                and JavaScript and build
                modern websites.
              </p>


              {/* PROGRESS BAR */}
              <div className="progress-container">

                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

                <span>
                  {progress}%
                </span>

              </div>

            </div>


            {/* CONTINUE BUTTON */}
            <button
              onClick={handleContinueLearning}
              className="continue-button"
            >
              {progress === 100
                ? "Review"
                : "Continue"}

              <span>
                →
              </span>
            </button>

          </div>

        </section>


        {/* =====================================
            RECENT LESSONS
        ====================================== */}
        <section className="dashboard-content">

          <div className="section-title">

            <div>

              <span>
                YOUR ACTIVITY
              </span>

              <h2>
                Recent Lessons
              </h2>

            </div>

          </div>


          <div className="recent-lessons">

            {lessons.map((lesson) => {

              const isCompleted =
                completedLessons.includes(
                  lesson.id
                );

              return (

                <div
                  className="lesson-row"
                  key={lesson.id}
                >


                  {/* LESSON NUMBER */}
                  <div
                    className={`lesson-number ${
                      isCompleted
                        ? "completed"
                        : "current"
                    }`}
                  >
                    {isCompleted
                      ? "✓"
                      : lesson.id}
                  </div>


                  {/* LESSON INFORMATION */}
                  <div className="lesson-details">

                    <h3>
                      {lesson.title}
                    </h3>

                    <p>
                      Web Development • Lesson{" "}
                      {lesson.id}
                    </p>

                  </div>


                  {/* STATUS / ACTION */}
                  {isCompleted ? (

                    <span className="lesson-status completed-status">
                      Completed
                    </span>

                  ) : (

                    <Link
                      to={`/courses/1/learn/${lesson.id}`}
                      className="lesson-action"
                    >
                      Start →
                    </Link>

                  )}

                </div>

              );

            })}

          </div>

        </section>


        {/* =====================================
            QUICK ACTIONS
        ====================================== */}
        <section className="dashboard-content">

          <div className="section-title">

            <div>

              <span>
                QUICK ACTIONS
              </span>

              <h2>
                What would you like to do?
              </h2>

            </div>

          </div>


          <div className="quick-actions">


            {/* BROWSE COURSES */}
            <Link
              to="/courses"
              className="quick-card"
            >

              <div>
                📚
              </div>

              <h3>
                Browse Courses
              </h3>

              <p>
                Discover new courses and
                valuable skills.
              </p>

              <span>
                Explore →
              </span>

            </Link>


            {/* CONTINUE LEARNING */}
            <button
              onClick={handleContinueLearning}
              className="quick-card"
            >

              <div>
                🚀
              </div>

              <h3>
                Continue Learning
              </h3>

              <p>
                Pick up exactly where
                you left off.
              </p>

              <span>
                Continue →
              </span>

            </button>


            {/* HOME */}
            <Link
              to="/"
              className="quick-card"
            >

              <div>
                🏠
              </div>

              <h3>
                Back Home
              </h3>

              <p>
                Return to your LearnHub
                homepage.
              </p>

              <span>
                Go Home →
              </span>

            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;