import Marquee from "react-fast-marquee";
import "./ScrollingHeadline.css";

export default function ScrollingHeadline() {
  const notices = [
    "Spring Registration Now Open!",
    "New Advanced Calculus Course Available",
    "Math Olympiad Registrations Extended",
    "Free Tutoring Sessions Every Weekend",
    "Scholarship Opportunities Available",
  ];

  return (
    <div className="scrolling-headline">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        loop={0}
        className="headline-content"
      >
        {notices.map((notice, idx) => (
          <span key={idx} className="notice-item">
            {notice}
            <span className="divider">•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
