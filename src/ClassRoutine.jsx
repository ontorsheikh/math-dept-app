import "./ClassRoutine.css";
import routineImage from "./assets/2f0597c8-8521-4119-91e7-87d999f5f0e4.jfif";

export default function ClassRoutine() {
  return (
    <section className="class-routine-section">
      <div className="routine-container">
        <div className="routine-header">
          <h2 className="routine-title">
            <span className="title-word">Class</span>
            <span className="title-word">Routine</span>
          </h2>
          <p className="routine-subtitle">
            📚 Mathematics Department Schedule 2026
          </p>
        </div>

        <div className="routine-image-wrapper">
          {/* Animated background */}
          <div className="routine-bg-glow"></div>
          <div className="routine-border-animate"></div>

          {/* Main image container */}
          <div className="routine-image-container">
            <img
              src={routineImage}
              alt="Class Routine - Mathematics Department"
              className="routine-image"
            />

            {/* Animated corner accents */}
            <div className="corner-accent corner-top-left">✓</div>
            <div className="corner-accent corner-top-right">✓</div>
            <div className="corner-accent corner-bottom-left">✓</div>
            <div className="corner-accent corner-bottom-right">✓</div>

            {/* Floating elements */}
            <div className="floating-element element-1">∑</div>
            <div className="floating-element element-2">∫</div>
            <div className="floating-element element-3">√</div>
            <div className="floating-element element-4">π</div>
          </div>

          {/* Info badge */}
          <div className="routine-badge">
            <span className="badge-icon">🎓</span>
            <span className="badge-text">Full Year Schedule</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="routine-cta">
          <p className="cta-text">
            📥 Download the routine and plan your schedule
          </p>
          <button className="cta-button">Download PDF</button>
        </div>
      </div>
    </section>
  );
}
