import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ScrollingHeadline from "./ScrollingHeadline";
import MathGraphics from "./MathGraphics";
import AnimatedDepartmentText from "./AnimatedDepartmentText";
import TeacherNameplate from "./TeacherNameplate";
import ClassRoutine from "./ClassRoutine";
import LogoGallery from "./LogoGallery";
import AssetGallery from "./AssetGallery";

export default function App() {
  const [activeTab, setActiveTab] = useState("algebra");

  const topics = {
    algebra: {
      title: "🔡 Algebra",
      color: "#FF6B6B",
      description: "Master equations, variables, and polynomial expressions",
      subtopics: [
        "Linear Equations",
        "Quadratic Equations",
        "Polynomials",
        "Functions",
      ],
    },
    geometry: {
      title: "📐 Geometry",
      color: "#4ECDC4",
      description: "Explore shapes, angles, and spatial relationships",
      subtopics: [
        "Shapes & Properties",
        "Area & Volume",
        "Angles",
        "Trigonometry",
      ],
    },
    calculus: {
      title: "📈 Calculus",
      color: "#FFE66D",
      description: "Study rates of change and accumulation",
      subtopics: ["Limits", "Derivatives", "Integrals", "Applications"],
    },
    statistics: {
      title: "📊 Statistics",
      color: "#95E1D3",
      description: "Analyze data and understand probability",
      subtopics: [
        "Data Analysis",
        "Probability",
        "Distributions",
        "Hypothesis Testing",
      ],
    },
  };

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Scrolling Headline */}
      <ScrollingHeadline />

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-wrapper">
          <div className="header-content">
            <h1 className="title">
              <span className="title-char" style={{ animationDelay: "0s" }}>
                M
              </span>
              <span className="title-char" style={{ animationDelay: "0.1s" }}>
                A
              </span>
              <span className="title-char" style={{ animationDelay: "0.2s" }}>
                T
              </span>
              <span className="title-char" style={{ animationDelay: "0.3s" }}>
                H
              </span>
              <span className="title-char" style={{ animationDelay: "0.4s" }}>
                S
              </span>
            </h1>
            <AnimatedDepartmentText />
            <h2
              className="college-name"
              aria-label="Govt K.C College, Jhenaidah"
            >
              {"Govt K.C College, Jhenaidah".split("").map((c, i) => (
                <span
                  key={i}
                  className="college-char"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </h2>
          </div>
          <MathGraphics />
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-card">
          <h2>Welcome to Our Mathematics Department</h2>
          <p>
            Discover the beauty and power of mathematics! From abstract algebra
            to practical statistics, we offer comprehensive courses and
            resources to help you master every aspect of mathematical thinking.
          </p>
          <div className="floating-icons">
            <span className="icon">∑</span>
            <span className="icon">∫</span>
            <span className="icon">√</span>
            <span className="icon">π</span>
            <span className="icon">∞</span>
          </div>
        </div>
      </section>

      {/* Topics Navigation */}
      <section className="topics-section">
        <h2 className="section-title">Explore Our Topics</h2>
        <div className="topic-tabs">
          {Object.entries(topics).map(([key, topic]) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
              style={{ "--tab-color": topic.color }}
            >
              {topic.title}
            </button>
          ))}
        </div>

        {/* Active Topic Display */}
        <div className="topic-display">
          <div
            className="topic-card"
            style={{ "--card-color": topics[activeTab].color }}
          >
            <h3>{topics[activeTab].title}</h3>
            <p className="topic-description">{topics[activeTab].description}</p>
            <div className="subtopics">
              {topics[activeTab].subtopics.map((subtopic, idx) => (
                <div
                  key={idx}
                  className="subtopic-item"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="subtopic-number">{idx + 1}</span>
                  <span className="subtopic-text">{subtopic}</span>
                  <span className="subtopic-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Nameplate Section */}
      <TeacherNameplate />

      {/* Class Routine Section */}
      <ClassRoutine />

      {/* Logo Gallery Section */}
      <LogoGallery />

      {/* Features Section */}
      <section className="features-section">
        <div className="features-graphics" aria-hidden>
          <svg
            className="fg-blob fg-blob-1"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#4ecdc4" />
              </linearGradient>
            </defs>
            <path
              fill="url(#g1)"
              opacity="0.18"
              d="M84.7,-107.1C109.6,-85.9,129.8,-59.6,136.1,-30.8C142.3,-2.1,134.6,28.9,116.7,56.1C98.8,83.2,70.6,106.4,40.6,120.1C10.6,133.7,-20.1,137.8,-47.9,126.8C-75.7,115.8,-100.5,89.6,-120.4,57.6C-140.3,25.6,-155.3,-12.2,-143.4,-43.2C-131.6,-74.2,-92.9,-98.4,-55.6,-115.9C-18.4,-133.5,17.2,-144.4,47.9,-135.4C78.6,-126.4,103.9,-97.3,84.7,-107.1Z"
              transform="translate(200 200)"
            />
          </svg>
          <svg
            className="fg-lines"
            viewBox="0 0 600 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80 C150 10, 450 150, 600 40"
              stroke="rgba(78,205,196,0.12)"
              strokeWidth="6"
              fill="none"
            />
            <circle cx="80" cy="70" r="6" fill="#ff6b6b" opacity="0.9" />
            <circle cx="260" cy="50" r="5" fill="#4ecdc4" opacity="0.9" />
            <circle cx="420" cy="75" r="4" fill="#ffe66d" opacity="0.9" />
          </svg>
        </div>
        <h2 className="section-title">Why Choose Our Department?</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ animationDelay: "0s" }}>
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>
              Learn from experienced mathematicians with real-world applications
            </p>
          </div>
          <div className="feature-card" style={{ animationDelay: "0.15s" }}>
            <div className="feature-icon">💻</div>
            <h3>Interactive Learning</h3>
            <p>
              Engage with dynamic tools and visualizations to understand
              concepts
            </p>
          </div>
          <div className="feature-card" style={{ animationDelay: "0.3s" }}>
            <div className="feature-icon">🏆</div>
            <h3>Proven Results</h3>
            <p>Our students excel in competitions and advanced mathematics</p>
          </div>
          <div className="feature-card" style={{ animationDelay: "0.45s" }}>
            <div className="feature-icon">🌍</div>
            <h3>Global Community</h3>
            <p>
              Connect with mathematicians and students from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <h2 className="section-title">Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">2000+</div>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <p>Expert Courses</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <p>Success Rate</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Asset Gallery Section (after Our Impact) */}
      <AssetGallery />

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to Master Mathematics?</h2>
          <p>
            Join thousands of students transforming their mathematical abilities
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Mathematics Department | Cultivating Mathematical Excellence
        </p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
          <a href="#resources">Resources</a>
        </div>
        <div className="dev-credit" aria-label="Website developer">
          <svg
            className="dev-icon"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <defs>
              <linearGradient id="devG" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="100%" stopColor="#4ecdc4" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#devG)" opacity="0.95" />
            <path
              d="M8 12c1.333-2 4-2 5 0"
              stroke="#fff"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="dev-text">
            Website by <strong>Md. Ontor Sheikh</strong> <small> (skontorsheikh1613@gmail.com)</small>
          </span>
        </div>
      </footer>
    </div>
  );
}
