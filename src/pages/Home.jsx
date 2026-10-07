import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="home-hero-content">

          <span className="home-badge">
            ✦ ONLINE LEARNING PLATFORM
          </span>

          <h1>
            Learn Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Discover practical courses, develop valuable skills,
            track your progress, and take your learning journey
            to the next level with LearnHub.
          </p>


          <div className="home-hero-buttons">

            <Link
              to="/courses"
              className="home-primary-button"
            >
              Explore Courses
              <span>→</span>
            </Link>

            <Link
              to="/register"
              className="home-secondary-button"
            >
              Create Free Account
            </Link>

          </div>


          <div className="home-trust">

            <div className="trust-avatars">
              <span>👩</span>
              <span>👨</span>
              <span>👩</span>
              <span>👨</span>
            </div>

            <div>
              <strong>Join learners worldwide</strong>
              <small>Start learning today</small>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="home-hero-visual">

          <div className="hero-glow"></div>

          <div className="learning-window">

            <div className="window-top">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>LearnHub</span>

            </div>


            <div className="window-content">

              <div className="mini-sidebar">

                <div className="mini-logo">
                  🎓
                </div>

                <div className="mini-sidebar-item active">
                  🏠
                </div>

                <div className="mini-sidebar-item">
                  📚
                </div>

                <div className="mini-sidebar-item">
                  🎯
                </div>

              </div>


              <div className="mini-dashboard">

                <span className="mini-label">
                  YOUR LEARNING
                </span>

                <h3>
                  Keep Growing 🚀
                </h3>


                <div className="mini-course">

                  <div className="mini-course-icon">
                    💻
                  </div>

                  <div>
                    <strong>
                      Web Development
                    </strong>

                    <small>
                      65% completed
                    </small>

                    <div className="mini-progress">
                      <div></div>
                    </div>
                  </div>

                </div>


                <div className="mini-stats">

                  <div>
                    <strong>3</strong>
                    <small>Courses</small>
                  </div>

                  <div>
                    <strong>8</strong>
                    <small>Lessons</small>
                  </div>

                  <div>
                    <strong>65%</strong>
                    <small>Progress</small>
                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="floating-learning-card">
            <div>🔥</div>

            <span>
              <strong>7 Day Streak</strong>
              Keep it going!
            </span>
          </div>


          <div className="floating-course-card">
            <div>⚛️</div>

            <span>
              <strong>React.js</strong>
              Start learning
            </span>
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="home-stats">

        <div>
          <strong>500+</strong>
          <span>Active Learners</span>
        </div>

        <div>
          <strong>20+</strong>
          <span>Quality Courses</span>
        </div>

        <div>
          <strong>95%</strong>
          <span>Learning Satisfaction</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Learn Anytime</span>
        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="home-features">

        <div className="home-section-heading">

          <span>
            WHY LEARNHUB
          </span>

          <h2>
            Everything you need to
            <br />
            <strong>learn and grow.</strong>
          </h2>

          <p>
            LearnHub gives you the tools and resources you need
            to develop real-world skills at your own pace.
          </p>

        </div>


        <div className="home-feature-grid">

          <div className="home-feature-card">

            <div className="home-feature-icon purple">
              📚
            </div>

            <h3>
              Quality Courses
            </h3>

            <p>
              Learn from carefully organized courses designed
              to make complex topics easier to understand.
            </p>

            <Link to="/courses">
              Explore Courses →
            </Link>

          </div>


          <div className="home-feature-card">

            <div className="home-feature-icon green">
              🎯
            </div>

            <h3>
              Track Your Progress
            </h3>

            <p>
              Keep track of completed lessons and see how far
              you've progressed through your courses.
            </p>

            <Link to="/dashboard">
              View Dashboard →
            </Link>

          </div>


          <div className="home-feature-card">

            <div className="home-feature-icon orange">
              🚀
            </div>

            <h3>
              Learn at Your Pace
            </h3>

            <p>
              Study whenever you want and continue your learning
              journey whenever you're ready.
            </p>

            <Link to="/courses">
              Start Learning →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FEATURED COURSES ================= */}

      <section className="featured-courses">

        <div className="home-section-heading">

          <span>
            POPULAR COURSES
          </span>

          <h2>
            Start learning something
            <br />
            <strong>new today.</strong>
          </h2>

        </div>


        <div className="featured-course-grid">

          <div className="featured-course-card">

            <div className="featured-course-icon purple-bg">
              💻
            </div>

            <span>
              DEVELOPMENT
            </span>

            <h3>
              Web Development
            </h3>

            <p>
              Learn HTML, CSS and JavaScript and build
              modern websites.
            </p>

            <Link to="/courses/1">
              View Course →
            </Link>

          </div>


          <div className="featured-course-card">

            <div className="featured-course-icon blue-bg">
              ⚛️
            </div>

            <span>
              DEVELOPMENT
            </span>

            <h3>
              React.js
            </h3>

            <p>
              Build interactive and modern web applications
              using React.
            </p>

            <Link to="/courses/2">
              View Course →
            </Link>

          </div>


          <div className="featured-course-card">

            <div className="featured-course-icon green-bg">
              🔐
            </div>

            <span>
              SECURITY
            </span>

            <h3>
              Cyber Security
            </h3>

            <p>
              Learn the fundamentals of protecting systems
              and networks.
            </p>

            <Link to="/courses/3">
              View Course →
            </Link>

          </div>

        </div>


        <div className="view-all-courses">
          <Link to="/courses">
            View All Courses →
          </Link>
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <span>
            READY TO START?
          </span>

          <h2>
            Your learning journey
            <br />
            starts here.
          </h2>

          <p>
            Create your free account and start building
            skills that can shape your future.
          </p>

          <Link
            to="/register"
            className="home-cta-button"
          >
            Get Started for Free
            <span>→</span>
          </Link>

        </div>

        <div className="cta-icon">
          🎓
        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="home-footer">

        <div className="footer-brand">

          <Link to="/" className="home-logo">
            LearnHub <span>🎓</span>
          </Link>

          <p>
            Learn skills. Build your future.
          </p>

        </div>


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>

        </div>


        <p className="footer-copy">
          © 2026 LearnHub. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;