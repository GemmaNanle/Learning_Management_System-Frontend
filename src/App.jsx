import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { initializeTheme } from "./utils/theme";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CourseLearn from "./pages/CourseLearn";
import Lesson from "./pages/Lesson";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Progress from "./pages/Progress";


function App() {

  useEffect(() => {
    initializeTheme();
  }, []);


  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            HOME
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            AUTHENTICATION
        ========================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* =========================
            DASHBOARD
        ========================== */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* =========================
            PROFILE
        ========================== */}

        <Route
          path="/profile"
          element={<Profile />}
        />


        {/* =========================
            SETTINGS
        ========================== */}

        <Route
          path="/settings"
          element={<Settings />}
        />


        {/* =========================
            COURSES
        ========================== */}

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/:courseId"
          element={<CourseDetails />}
        />


        {/* =========================
            COURSE LEARNING
        ========================== */}

        <Route
          path="/courses/:courseId/learn"
          element={<CourseLearn />}
        />


        {/* =========================
            INDIVIDUAL LESSON
        ========================== */}

        <Route
          path="/courses/:courseId/learn/:lessonId"
          element={<Lesson />}
        />


        {/* =========================
            404
        ========================== */}

        <Route
          path="*"
          element={
            <div className="not-found-page">

              <div className="not-found-content">

                <span className="badge">
                  404 ERROR
                </span>

                <h1>
                  Page Not Found
                </h1>

                <p>
                  Sorry, the page you're looking for
                  doesn't exist.
                </p>

                <a
                  href="/"
                  className="primary-button"
                >
                  ← Back to Home
                </a>

              </div>

            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;