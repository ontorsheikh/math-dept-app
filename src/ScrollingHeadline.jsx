import Marquee from "react-fast-marquee";
import "./ScrollingHeadline.css";

export default function ScrollingHeadline() {
  const notices = [
    " *** ***  💻 Developer Md. Ontor Sheikh is available for freelance projects! Contact: skontorsheikh1613@gmail.com",
    "🎓 Spring Registration Now Open!",
    "📊 New Advanced Calculus Course Available",
    "🏆 Math Olympiad Registrations Extended",
    "📚 Free Tutoring Sessions Every Weekend",
    "💰 Scholarship Opportunities Available",
    "🚀 Launch Your Mathematical Journey Today!",
    "✨ Excellence in Mathematics Education",
    "🔬 Discover Advanced Algebra Secrets",
  ];

  return (
    <div className="scrolling-headline">
      {/* Background bars */}
      <div className="headline-bars">
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
        <div className="bar bar-4"></div>
      </div>

      {/* Shapes */}
      <div className="headline-decorations">
        <svg className="animated-shape shape-1" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <svg className="animated-shape shape-2" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <svg className="animated-shape shape-3" viewBox="0 0 100 100">
          <path d="M50 10 L61 40 L98 40 L68 62 L79 92 L50 70 L21 92 L32 62 L2 40 L39 40 Z" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Particles */}
      <div className="headline-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ "--delay": `${i * 0.5}s` }}></div>
        ))}
      </div>

      {/* Marquee */}
      <Marquee speed={55} pauseOnHover gradient={false} className="headline-content">
        {notices.map((notice, i) => (
          <span key={i} className="notice-item">
            {notice}
            <span className="divider">✧</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
