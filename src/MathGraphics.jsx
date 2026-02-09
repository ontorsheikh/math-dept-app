import "./MathGraphics.css";

export default function MathGraphics() {
  return (
    <div className="math-graphics-container">
      {/* Main Animated Logo */}
      <div className="main-logo">
        <svg
          viewBox="0 0 200 200"
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer rotating circle */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="2"
            className="outer-circle"
          />

          {/* Math symbols and elements */}
          <g className="math-elements">
            {/* Pi symbol */}
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fontSize="60"
              fontWeight="900"
              className="pi-symbol"
              fill="url(#gradientText)"
            >
              π
            </text>
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#FFE66D" />
            </linearGradient>
            <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating orbits */}
        <div className="orbit orbit-1">
          <div className="orbit-element">∑</div>
        </div>
        <div className="orbit orbit-2">
          <div className="orbit-element">∫</div>
        </div>
        <div className="orbit orbit-3">
          <div className="orbit-element">√</div>
        </div>

        {/* Glow effect */}
        <div className="logo-glow"></div>
      </div>

      {/* Floating graphic elements */}
      <div className="floating-shapes">
        {/* Animated Triangle */}
        <div className="shape triangle" style={{ "--shape-delay": "0s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Animated Circle */}
        <div className="shape circle" style={{ "--shape-delay": "0.2s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Animated Square */}
        <div className="shape square" style={{ "--shape-delay": "0.4s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Animated Wave */}
        <div className="shape wave" style={{ "--shape-delay": "0.6s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 50 Q 25 30 40 50 T 70 50 T 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Animated Hexagon */}
        <div className="shape hexagon" style={{ "--shape-delay": "0.8s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Animated background grid */}
      <div className="grid-background">
        <div className="grid-line grid-h-1"></div>
        <div className="grid-line grid-h-2"></div>
        <div className="grid-line grid-h-3"></div>
        <div className="grid-line grid-v-1"></div>
        <div className="grid-line grid-v-2"></div>
        <div className="grid-line grid-v-3"></div>
      </div>

      {/* Particle effects */}
      <div className="particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{ "--particle-index": i }}
          ></div>
        ))}
      </div>
    </div>
  );
}
