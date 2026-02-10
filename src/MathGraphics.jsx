import "./MathGraphics.css";

export default function MathGraphics() {
  // Generate sine wave path
  const generateSinePath = () => {
    let path = "M 0 50";
    for (let i = 0; i <= 100; i += 5) {
      const y = 50 - Math.sin((i / 100) * Math.PI * 2) * 20;
      path += ` L ${i} ${y}`;
    }
    return path;
  };

  // Generate cosine wave path
  const generateCosinePath = () => {
    let path = "M 0 50";
    for (let i = 0; i <= 100; i += 5) {
      const y = 50 - Math.cos((i / 100) * Math.PI * 2) * 20;
      path += ` L ${i} ${y}`;
    }
    return path;
  };

  // Generate spiral path
  const generateSpiralPath = () => {
    let path = "M 50 50";
    for (let i = 0; i < 360; i += 10) {
      const angle = (i * Math.PI) / 180;
      const radius = (i / 360) * 40;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  // Generate lissajous curve
  const generateLissajousPath = () => {
    let path = "M 50 50";
    for (let t = 0; t <= 360; t += 5) {
      const angle = (t * Math.PI) / 180;
      const x = 50 + 35 * Math.sin(3 * angle);
      const y = 50 + 35 * Math.cos(2 * angle);
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  return (
    <div className="math-graphics-container">
      {/* Advanced Animated Logo */}
      <div className="main-logo">
        <svg
          viewBox="0 0 200 200"
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer rotating circles */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="2"
            className="outer-circle"
          />
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="url(#gradientStroke2)"
            strokeWidth="1.5"
            className="outer-circle-secondary"
            opacity="0.6"
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

          {/* Mathematical curves inside */}
          <g className="inner-curves" opacity="0.4">
            <path
              d={generateSinePath()}
              fill="none"
              stroke="url(#gradientText)"
              strokeWidth="1"
              className="sine-wave"
            />
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#FFE66D" />
            </linearGradient>
            <linearGradient
              id="gradientStroke2"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FFE66D" />
              <stop offset="50%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
            <linearGradient
              id="gradientText"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating orbits with multiple symbols */}
        <div className="orbit orbit-1">
          <div className="orbit-element">∑</div>
        </div>
        <div className="orbit orbit-2">
          <div className="orbit-element">∫</div>
        </div>
        <div className="orbit orbit-3">
          <div className="orbit-element">√</div>
        </div>
        <div className="orbit orbit-4">
          <div className="orbit-element">∞</div>
        </div>
        <div className="orbit orbit-5">
          <div className="orbit-element">∂</div>
        </div>

        {/* Rotating glow effect */}
        <div className="logo-glow"></div>
        <div className="logo-glow-secondary"></div>
      </div>

      {/* Enhanced floating graphic elements */}
      <div className="floating-shapes">
        {/* Animated Triangle with rotation */}
        <div className="shape triangle" style={{ "--shape-delay": "0s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="46.67"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Animated Circle with inner patterns */}
        <div className="shape circle" style={{ "--shape-delay": "0.2s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Animated Square with rotation */}
        <div className="shape square" style={{ "--shape-delay": "0.4s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="30"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Sine Wave */}
        <div className="shape wave" style={{ "--shape-delay": "0.6s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d={generateSinePath()}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Hexagon with interior */}
        <div className="shape hexagon" style={{ "--shape-delay": "0.8s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Spiral */}
        <div className="shape spiral" style={{ "--shape-delay": "1s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d={generateSpiralPath()}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Lissajous Curve */}
        <div className="shape lissajous" style={{ "--shape-delay": "1.2s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d={generateLissajousPath()}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Fractal Star */}
        <div className="shape fractal" style={{ "--shape-delay": "1.4s" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,5 61,35 92,35 67,57 78,87 50,65 22,87 33,57 8,35 39,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Animated Mathematical Grid */}
      <div className="grid-background">
        <svg
          viewBox="0 0 300 300"
          preserveAspectRatio="xMidYMid slice"
          className="math-grid"
        >
          <defs>
            <linearGradient
              id="gridGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFE66D" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Vertical grid lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 30}
              y1="0"
              x2={i * 30}
              y2="300"
              stroke="url(#gridGradient)"
              strokeWidth="1"
              className="grid-line-animated"
            />
          ))}

          {/* Horizontal grid lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 30}
              x2="300"
              y2={i * 30}
              stroke="url(#gridGradient)"
              strokeWidth="1"
              className="grid-line-animated"
            />
          ))}
        </svg>
      </div>

      {/* Mathematical Symbol Decorations */}
      <div className="math-symbols-decoration">
        <div
          className="math-symbol"
          style={{ "--delay": "0s", "--x": "10%", "--y": "20%" }}
        >
          π
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "0.2s", "--x": "85%", "--y": "15%" }}
        >
          ∞
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "0.4s", "--x": "15%", "--y": "80%" }}
        >
          √
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "0.6s", "--x": "75%", "--y": "85%" }}
        >
          ∑
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "0.8s", "--x": "45%", "--y": "25%" }}
        >
          ∫
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "1s", "--x": "65%", "--y": "70%" }}
        >
          ∂
        </div>
        <div
          className="math-symbol"
          style={{ "--delay": "1.2s", "--x": "25%", "--y": "50%" }}
        >
          φ
        </div>
      </div>

      {/* Enhanced Particle Effects */}
      <div className="particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{ "--particle-index": i }}
          ></div>
        ))}
      </div>

      {/* Geometric Pattern Background */}
      <div className="geometric-pattern">
        <svg
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          className="pattern-svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="1.5"
                fill="currentColor"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="200"
            height="200"
            fill="url(#dotPattern)"
            className="pattern-fill"
          />
        </svg>
      </div>
    </div>
  );
}
