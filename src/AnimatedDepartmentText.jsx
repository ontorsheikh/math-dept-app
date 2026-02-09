import "./AnimatedDepartmentText.css";

export default function AnimatedDepartmentText() {
  // Create text with line breaks: Department\nof\nMathematics
  const sections = [
    { text: "Department", type: "word" },
    { text: "\n", type: "break" },
    { text: "of", type: "word" },
    { text: "\n", type: "break" },
    { text: "Mathematics", type: "word" },
  ];

  // Flatten into letters with break indicators
  let letterIndex = 0;
  const letters = [];

  sections.forEach((section) => {
    if (section.type === "break") {
      letters.push({ char: "\n", isBreak: true, index: letterIndex });
      letterIndex++;
    } else {
      section.text.split("").forEach((char) => {
        letters.push({ char: char, isBreak: false, index: letterIndex });
        letterIndex++;
      });
    }
  });

  return (
    <div className="animated-dept-container">
      {/* Main animated text with highlight background */}
      <div className="animated-text-wrapper">
        {/* Highlight background that slides in */}
        <div className="highlight-bg"></div>

        <h2 className="animated-dept-text">
          {letters.map((letterObj, idx) =>
            letterObj.isBreak ? (
              <br key={idx} />
            ) : (
              <span
                key={idx}
                className="letter"
                style={{
                  animationDelay: `${idx * 0.05}s`,
                }}
              >
                {letterObj.char === " " ? "\u00A0" : letterObj.char}
              </span>
            ),
          )}
        </h2>

        {/* Cursor animation */}
        <span className="cursor"></span>
        {/* College name line styled like the department text (per-letter) */}
        <div className="college-line" aria-label="Govt K.C College, Jhenaidah">
          {"Govt K.C College, Jhenaidah".split("").map((ch, i) => (
            <span
              key={`col-${i}`}
              className="college-letter"
              style={{ animationDelay: `${letters.length * 0.05 + i * 0.03}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="accent-elements">
        <span className="accent accent-1">∑</span>
        <span className="accent accent-2">∫</span>
        <span className="accent accent-3">√</span>
        <span className="accent accent-4">π</span>
        <span className="accent accent-5">∞</span>
        <span className="accent accent-6">Δ</span>
      </div>
    </div>
  );
}
