import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Student",
    email: "student@example.com",
    phone: "",
    bio: "I'm currently learning new skills and building my future with LearnHub.",
    level: "Beginner Learner",
    goal: "Build practical technology skills",
  });

  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setProfile(form);
    setEditing(false);

    localStorage.setItem(
      "learnhub-profile",
      JSON.stringify(form)
    );
  };

  return (
    <div className="profile-page">

      {/* PAGE HEADER */}
      <div className="profile-page-header">

        <div>
          <span className="profile-eyebrow">
            LEARNHUB STUDENT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and
            learning journey.
          </p>
        </div>

        <Link
          to="/settings"
          className="profile-settings-button"
        >
          ⚙️ Settings
        </Link>

      </div>


      {/* PROFILE HERO */}
      <section className="profile-hero">

        <div className="profile-hero-background"></div>

        <div className="profile-hero-content">

          <div className="profile-avatar-large">
            👤

            <span className="online-dot"></span>
          </div>

          <div className="profile-main-info">

            <span className="profile-role">
              ✨ LEARNHUB STUDENT
            </span>

            <h2>{profile.name}</h2>

            <p>
              {profile.email}
            </p>

            <div className="profile-level">
              🎓 {profile.level}
            </div>

          </div>

          <button
            className="edit-profile-button"
            onClick={() => {
              setForm(profile);
              setEditing(true);
            }}
          >
            ✏️ Edit Profile
          </button>

        </div>

      </section>


      {/* STATISTICS */}
      <section className="profile-stats">

        <div className="profile-stat-card">
          <span className="stat-icon">📚</span>

          <div>
            <strong>1</strong>
            <span>Courses</span>
          </div>
        </div>


        <div className="profile-stat-card">
          <span className="stat-icon">🎯</span>

          <div>
            <strong>6</strong>
            <span>Lessons</span>
          </div>
        </div>


        <div className="profile-stat-card">
          <span className="stat-icon">🏆</span>

          <div>
            <strong>0</strong>
            <span>Achievements</span>
          </div>
        </div>


        <div className="profile-stat-card">
          <span className="stat-icon">🔥</span>

          <div>
            <strong>1</strong>
            <span>Day Streak</span>
          </div>
        </div>

      </section>


      {/* MAIN GRID */}
      <div className="profile-grid">

        {/* ABOUT */}
        <section className="profile-card">

          <div className="profile-card-header">

            <div>
              <span className="card-label">
                ABOUT YOU
              </span>

              <h3>Personal Information</h3>
            </div>

          </div>


          <div className="profile-information">

            <div className="information-item">
              <span>FULL NAME</span>
              <strong>{profile.name}</strong>
            </div>

            <div className="information-item">
              <span>EMAIL ADDRESS</span>
              <strong>{profile.email}</strong>
            </div>

            <div className="information-item">
              <span>PHONE NUMBER</span>
              <strong>
                {profile.phone || "Not provided"}
              </strong>
            </div>

            <div className="information-item">
              <span>LEARNING LEVEL</span>
              <strong>{profile.level}</strong>
            </div>

            <div className="information-item">
              <span>LEARNING GOAL</span>
              <strong>{profile.goal}</strong>
            </div>

            <div className="information-item full-width">
              <span>BIO</span>

              <p>
                {profile.bio}
              </p>
            </div>

          </div>

        </section>


        {/* LEARNING */}
        <section className="profile-card learning-card">

          <div className="profile-card-header">

            <div>
              <span className="card-label">
                YOUR LEARNING
              </span>

              <h3>Current Course</h3>
            </div>

            <Link to="/courses">
              Browse Courses →
            </Link>

          </div>


          <div className="current-course">

            <div className="course-icon">
              💻
            </div>

            <div className="course-information">

              <span>
                DEVELOPMENT
              </span>

              <h4>
                Web Development
              </h4>

              <p>
                Learn HTML, CSS, JavaScript and
                build modern websites.
              </p>

            </div>

          </div>


          <div className="course-progress">

            <div className="progress-heading">

              <span>
                Course Progress
              </span>

              <strong>
                0%
              </strong>

            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: "0%" }}
              ></div>
            </div>

          </div>


          <Link
            to="/courses"
            className="continue-learning-button"
          >
            Continue Learning →
          </Link>

        </section>


        {/* GOAL */}
        <section className="profile-card goal-card">

          <div className="goal-icon">
            🎯
          </div>

          <div>

            <span className="card-label">
              MY LEARNING GOAL
            </span>

            <h3>
              {profile.goal}
            </h3>

            <p>
              Keep learning consistently and
              build valuable skills for your future.
            </p>

          </div>

        </section>


        {/* ACHIEVEMENT */}
        <section className="profile-card achievement-card">

          <div className="achievement-icon">
            🏆
          </div>

          <div>

            <span className="card-label">
              ACHIEVEMENTS
            </span>

            <h3>
              Your journey has started!
            </h3>

            <p>
              Complete lessons and courses to
              unlock your first achievement.
            </p>

          </div>

        </section>

      </div>


      {/* EDIT MODAL */}
      {editing && (

        <div className="profile-modal-overlay">

          <div className="profile-modal">

            <div className="modal-header">

              <div>
                <span className="card-label">
                  PROFILE
                </span>

                <h2>
                  Edit Profile
                </h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setEditing(false)}
              >
                ×
              </button>

            </div>


            <div className="profile-form">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

              </div>


              <div className="form-group">

                <label>
                  Learning Goal
                </label>

                <input
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  placeholder="What do you want to learn?"
                />

              </div>


              <div className="form-group">

                <label>
                  Bio
                </label>

                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />

              </div>


              <div className="modal-actions">

                <button
                  className="cancel-button"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-profile-button"
                  onClick={handleSave}
                >
                  ✓ Save Changes
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Profile;