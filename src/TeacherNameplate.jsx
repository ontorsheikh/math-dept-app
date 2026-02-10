import { useState } from "react";
import "./TeacherNameplate.css";

export default function TeacherNameplate() {
  const [hoveredTeacher, setHoveredTeacher] = useState(null);

  const teachers = [
    {
      id: 1,
      name: "Md. Taybur Rahman",
      nameParts: ["Md. Taybur", "Rahman"],
      subject: "Algebra & Linear Equations",
      initial: "TR",
      color: "#6d87a1",
      specialty: "Associate Professor",
      experience: "15 years",
      icon: "🔡",
      phone: "01962343270",
    },
    {
      id: 2,
      name: "Shahid Shafayet Hossain",
      nameParts: ["Shahid", "Shafayet Hossain"],
      subject: "Geometry & Trigonometry",
      initial: "SH",
      color: "#6a5fb3",
      specialty: "Associate Professor",
      experience: "12 years",
      icon: "📐",
      phone: "01911662577",
    },
    {
      id: 3,
      name: "Md. Nazmul Haque",
      nameParts: ["Md. Nazmul", "Haque"],
      subject: "Calculus & Analysis",
      initial: "NH",
      color: "#b79264",
      specialty: "Assistant Professor",
      experience: "18 years",
      icon: "📈",
      phone: "01716601973",
    },
    {
      id: 4,
      name: "Md. Rabiul Islam",
      nameParts: ["Md. Rabiul", "Islam"],
      subject: "Statistics & Probability",
      initial: "RI",
      color: "#66c1b0",
      specialty: "Assistant Professor",
      experience: "10 years",
      icon: "📊",
      phone: "01945952588",
    },

    {
      id: 5,
      name: "SK. Anarul Islam",
      nameParts: ["SK. Anarul", "Islam"],
      subject: "Statistics & Probability",
      initial: "AI",
      color: "#664364",
      specialty: "Assistant Professor",
      experience: "10 years",
      icon: "📊",
      phone: "01918620061",
    },
    {
      id: 6,
      name: "Alit Kumar",
      nameParts: ["Alit", "Kumar"],
      subject: "Statistics & Probability",
      initial: "AK",
      color: "#3d6647",
      specialty: "Lecturer",
      experience: "10 years",
      icon: "📊",
      phone: "01722880051",
    },
  ];

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "0, 0, 0";
  };

  return (
    <section className="teacher-section">
      <h2 className="teacher-section-title">Meet Our Expert Teachers</h2>
      <p className="teacher-section-subtitle">
        Learn from the best mathematicians in the field
      </p>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className={`teacher-nameplate ${hoveredTeacher === teacher.id ? "active" : ""}`}
            onMouseEnter={() => setHoveredTeacher(teacher.id)}
            onMouseLeave={() => setHoveredTeacher(null)}
            style={{
              "--teacher-color": teacher.color,
              "--teacher-color-rgb": hexToRgb(teacher.color),
            }}
          >
            {/* Animated Background */}
            <div className="nameplate-bg"></div>

            {/* Animated corners */}
            <div className="corner corner-1"></div>
            <div className="corner corner-2"></div>
            <div className="corner corner-3"></div>
            <div className="corner corner-4"></div>

            {/* Avatar with animated ring */}
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <div className="avatar-ring-2"></div>
              <div className="avatar">
                <span className="avatar-initial">{teacher.initial}</span>
              </div>
              <div className="avatar-glow"></div>

              {/* Floating icons around avatar */}
              <div className="floating-icon icon-1">{teacher.icon}</div>
              <div className="floating-icon icon-2">✓</div>
              <div className="floating-icon icon-3">⭐</div>
            </div>

            {/* Sparkles */}
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            <div className="sparkle sparkle-4"></div>

            {/* Name with character reveal */}
            <h3 className="teacher-name">
              {teacher.nameParts.map((part, partIdx) => (
                <div key={partIdx}>
                  {part.split("").map((char, charIdx) => (
                    <span
                      key={`${partIdx}-${charIdx}`}
                      className="name-char"
                      style={{
                        animationDelay: `${(partIdx * 15 + charIdx) * 0.05}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                  {partIdx < teacher.nameParts.length - 1 && <br />}
                </div>
              ))}
            </h3>

            {/* Subject */}
            <p className="teacher-subject">
              <span className="subject-icon">📚</span>
              {teacher.subject}
            </p>

            {/* Experience badge */}
            <div className="experience-badge">
              <span className="exp-icon">👨‍🎓</span>
              <span className="exp-text">{teacher.experience}</span>
            </div>

            {/* Mobile Number */}
            <div className="mobile-contact">
              <span className="phone-icon">📱</span>
              <a href={`tel:${teacher.phone}`} className="phone-number">
                {teacher.phone}
              </a>
            </div>

            {/* Specialty - appears on hover */}
            <div className="specialty-text">
              <span className="specialty-label">Specialty:</span>
              <span className="specialty-value">{teacher.specialty}</span>
            </div>

            {/* Animated border */}
            <div className="animated-border"></div>

            {/* Hover indicator dots */}
            <div className="indicator-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
