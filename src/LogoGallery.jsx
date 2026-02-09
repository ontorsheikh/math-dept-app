import "./LogoGallery.css";
import logo from "./assets/kc college logo.jpg";

export default function LogoGallery() {
  return (
    <section className="logo-gallery-section">
      <div className="logo-container">
        {/* Section Header */}
        <div className="logo-header">
          <h2 className="logo-section-title">
            <span className="title-char">O</span>
            <span className="title-char">u</span>
            <span className="title-char">r</span>
            <span className="title-char"> </span>
             <span className="title-char"> </span>
              <span className="title-char"> </span>
            <span className="title-char">I</span>
            <span className="title-char">n</span>
            <span className="title-char">s</span>
            <span className="title-char">t</span>
            <span className="title-char">i</span>
            <span className="title-char">t</span>
            <span className="title-char">u</span>
            <span className="title-char">t</span>
            <span className="title-char">i</span>
            <span className="title-char">o</span>
            <span className="title-char">n</span>
          </h2>
          <p className="logo-subtitle">KC College - Mathematics Department</p>
        </div>

        {/* Logo Display Area */}
        <div className="logo-display-wrapper">
          {/* Animated background effects */}
          <div className="logo-bg-shine"></div>
          <div className="logo-glow-ring"></div>
          <div className="logo-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>

          {/* Main Logo Container */}
          <div className="logo-image-wrapper">
            <div className="logo-frame">
              <img src={logo} alt="KC College Logo" className="logo-image" />
            </div>

            {/* Animated Corner Elements */}
            <div className="corner-star corner-1">★</div>
            <div className="corner-star corner-2">★</div>
            <div className="corner-star corner-3">★</div>
            <div className="corner-star corner-4">★</div>

            {/* Floating Medals */}
            <div className="floating-medal medal-1">🏆</div>
            <div className="floating-medal medal-2">🎓</div>
            <div className="floating-medal medal-3">⭐</div>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card card-1">
              <span className="card-icon">📚</span>
              <span className="card-text">Excellence in Education</span>
            </div>
            <div className="info-card card-2">
              <span className="card-icon">🌟</span>
              <span className="card-text">Quality Learning</span>
            </div>
            <div className="info-card card-3">
              <span className="card-icon">🎯</span>
              <span className="card-text">Student Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
