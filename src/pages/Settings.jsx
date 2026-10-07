import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { setTheme } from "../utils/theme";
import "./Settings.css";

const defaultSettings = {
  appearance: "light",
  courseReminders: true,
  achievementAlerts: true,
  announcements: true,
  emailNotifications: true,
  autoplayVideos: true,
  showProgress: true,
  learningGoal: "Improve my technology skills",
  difficulty: "Beginner",
};

function Settings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  /* =========================
     LOAD SETTINGS
  ========================= */

  useEffect(() => {
    const savedSettings = localStorage.getItem(
      "learnhub-settings"
    );

    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);

        setSettings({
          ...defaultSettings,
          ...parsed,
        });
      } catch {
        setSettings(defaultSettings);
      }
    }

    const savedTheme =
      localStorage.getItem("learnhub-theme");

    if (savedTheme) {
      setSettings((previous) => ({
        ...previous,
        appearance: savedTheme,
      }));
    }
  }, []);

  /* =========================
     UPDATE SETTING
  ========================= */

  const updateSetting = (name, value) => {
    setSettings((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================
     SAVE
  ========================= */

  const handleSave = () => {
    localStorage.setItem(
      "learnhub-settings",
      JSON.stringify(settings)
    );

    setTheme(settings.appearance);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* =========================
     RESET
  ========================= */

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all LearnHub settings?"
    );

    if (!confirmed) return;

    setSettings(defaultSettings);

    localStorage.setItem(
      "learnhub-settings",
      JSON.stringify(defaultSettings)
    );

    setTheme("light");

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="settings-page">

      {/* NAVBAR */}

      <nav className="settings-navbar">

        <Link
          to="/"
          className="settings-logo"
        >
          LearnHub <span>🎓</span>
        </Link>

        <div className="settings-nav-links">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <Link
            to="/settings"
            className="active"
          >
            Settings
          </Link>

          <button
            className="settings-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* HEADER */}

      <header className="settings-header">

        <div>

          <span className="settings-eyebrow">
            LEARNHUB PREFERENCES
          </span>

          <h1>
            Settings
          </h1>

          <p>
            Personalize your LearnHub experience,
            notifications and learning preferences.
          </p>

        </div>


        <div className="settings-user">

          <div className="settings-user-avatar">
            {(user?.name || "S")
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>

            <strong>
              {user?.name || "Student"}
            </strong>

            <span>
              {user?.email || "LearnHub Student"}
            </span>

          </div>

        </div>

      </header>


      {/* MAIN */}

      <main className="settings-container">

        {/* SUCCESS */}

        {saved && (
          <div className="settings-success">
            ✓ Settings saved successfully!
          </div>
        )}


        {/* =========================
            APPEARANCE
        ========================= */}

        <section className="settings-card">

          <div className="settings-section-heading">

            <div className="settings-section-icon purple">
              🎨
            </div>

            <div>

              <span>
                APPEARANCE
              </span>

              <h2>
                Customize your experience
              </h2>

              <p>
                Choose how LearnHub looks.
              </p>

            </div>

          </div>


          <div className="appearance-options">

            {/* LIGHT */}

            <button
              type="button"
              className={`appearance-option ${
                settings.appearance === "light"
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                updateSetting(
                  "appearance",
                  "light"
                );

                setTheme("light");
              }}
            >

              <div className="appearance-preview light-preview">
                ☀️
              </div>

              <div>

                <strong>
                  Light
                </strong>

                <span>
                  Bright and clean
                </span>

              </div>

              {settings.appearance === "light" && (
                <b>✓</b>
              )}

            </button>


            {/* DARK */}

            <button
              type="button"
              className={`appearance-option ${
                settings.appearance === "dark"
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                updateSetting(
                  "appearance",
                  "dark"
                );

                setTheme("dark");
              }}
            >

              <div className="appearance-preview dark-preview">
                🌙
              </div>

              <div>

                <strong>
                  Dark
                </strong>

                <span>
                  Easier on the eyes
                </span>

              </div>

              {settings.appearance === "dark" && (
                <b>✓</b>
              )}

            </button>


            {/* SYSTEM */}

            <button
              type="button"
              className={`appearance-option ${
                settings.appearance === "system"
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                updateSetting(
                  "appearance",
                  "system"
                );

                setTheme("system");
              }}
            >

              <div className="appearance-preview system-preview">
                💻
              </div>

              <div>

                <strong>
                  System
                </strong>

                <span>
                  Follow device settings
                </span>

              </div>

              {settings.appearance === "system" && (
                <b>✓</b>
              )}

            </button>

          </div>

        </section>


        {/* =========================
            NOTIFICATIONS
        ========================= */}

        <section className="settings-card">

          <div className="settings-section-heading">

            <div className="settings-section-icon orange">
              🔔
            </div>

            <div>

              <span>
                NOTIFICATIONS
              </span>

              <h2>
                Stay updated
              </h2>

              <p>
                Choose which notifications you receive.
              </p>

            </div>

          </div>


          <div className="settings-list">

            <SettingToggle
              title="Course reminders"
              description="Get reminders for unfinished lessons."
              checked={
                settings.courseReminders
              }
              onChange={(value) =>
                updateSetting(
                  "courseReminders",
                  value
                )
              }
            />

            <SettingToggle
              title="Achievement alerts"
              description="Get notified when you unlock achievements."
              checked={
                settings.achievementAlerts
              }
              onChange={(value) =>
                updateSetting(
                  "achievementAlerts",
                  value
                )
              }
            />

            <SettingToggle
              title="Course announcements"
              description="Receive important course updates."
              checked={
                settings.announcements
              }
              onChange={(value) =>
                updateSetting(
                  "announcements",
                  value
                )
              }
            />

            <SettingToggle
              title="Email notifications"
              description="Receive important LearnHub updates."
              checked={
                settings.emailNotifications
              }
              onChange={(value) =>
                updateSetting(
                  "emailNotifications",
                  value
                )
              }
            />

          </div>

        </section>


        {/* =========================
            LEARNING
        ========================= */}

        <section className="settings-card">

          <div className="settings-section-heading">

            <div className="settings-section-icon green">
              📚
            </div>

            <div>

              <span>
                LEARNING
              </span>

              <h2>
                Learning preferences
              </h2>

              <p>
                Personalize your learning experience.
              </p>

            </div>

          </div>


          <div className="learning-settings">

            <div className="settings-field">

              <label>
                Learning goal
              </label>

              <input
                type="text"
                value={settings.learningGoal}
                onChange={(e) =>
                  updateSetting(
                    "learningGoal",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="settings-field">

              <label>
                Preferred difficulty
              </label>

              <select
                value={settings.difficulty}
                onChange={(e) =>
                  updateSetting(
                    "difficulty",
                    e.target.value
                  )
                }
              >

                <option>
                  Beginner
                </option>

                <option>
                  Intermediate
                </option>

                <option>
                  Advanced
                </option>

              </select>

            </div>

          </div>


          <div className="settings-list">

            <SettingToggle
              title="Autoplay lesson videos"
              description="Automatically start lesson videos."
              checked={
                settings.autoplayVideos
              }
              onChange={(value) =>
                updateSetting(
                  "autoplayVideos",
                  value
                )
              }
            />

            <SettingToggle
              title="Show learning progress"
              description="Display your course progress."
              checked={
                settings.showProgress
              }
              onChange={(value) =>
                updateSetting(
                  "showProgress",
                  value
                )
              }
            />

          </div>

        </section>


        {/* =========================
            SECURITY
        ========================= */}

        <section className="settings-card">

          <div className="settings-section-heading">

            <div className="settings-section-icon blue">
              🔐
            </div>

            <div>

              <span>
                SECURITY
              </span>

              <h2>
                Account security
              </h2>

              <p>
                Manage your account security.
              </p>

            </div>

          </div>


          <div className="security-options">

            <button
              type="button"
              className="security-option"
            >

              <div className="security-option-icon">
                🔑
              </div>

              <div>

                <strong>
                  Change Password
                </strong>

                <span>
                  Update your account password.
                </span>

              </div>

              <b>
                →
              </b>

            </button>


            <button
              type="button"
              className="security-option"
            >

              <div className="security-option-icon">
                🛡️
              </div>

              <div>

                <strong>
                  Account Protection
                </strong>

                <span>
                  Keep your LearnHub account secure.
                </span>

              </div>

              <b>
                →
              </b>

            </button>

          </div>

        </section>


        {/* =========================
            ACCOUNT
        ========================= */}

        <section className="settings-card danger-card">

          <div className="settings-section-heading">

            <div className="settings-section-icon red">
              ⚠️
            </div>

            <div>

              <span>
                ACCOUNT
              </span>

              <h2>
                Account management
              </h2>

              <p>
                Manage your LearnHub account.
              </p>

            </div>

          </div>


          <div className="account-actions">

            <button
              type="button"
              className="reset-settings"
              onClick={handleReset}
            >
              ↻ Reset Settings
            </button>

            <button
              type="button"
              className="logout-settings"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>

          </div>

        </section>


        {/* =========================
            FOOTER
        ========================= */}

        <div className="settings-footer">

          <Link
            to="/dashboard"
            className="settings-back"
          >
            ← Back to Dashboard
          </Link>

          <button
            className="settings-save"
            onClick={handleSave}
          >
            💾 Save Settings
          </button>

        </div>

      </main>

    </div>
  );
}


/* =========================================
   TOGGLE COMPONENT
========================================= */

function SettingToggle({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="setting-row">

      <div className="setting-row-text">

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </div>

      <button
        type="button"
        className={`toggle ${
          checked ? "on" : ""
        }`}
        onClick={() => onChange(!checked)}
      >
        <span />
      </button>

    </div>
  );
}

export default Settings;