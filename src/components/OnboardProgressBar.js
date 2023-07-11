function OnboardProgressBar(props) {
  const step = props.step;

  return (
    <div className="progress-container onboard-progress-bar">
      <ol className="horizontal-list">
        <li className={step === "lead-and-rhythm" ? "selected" : ""}>Lead & Rhythm</li>
        <li className={step === "bass" ? "selected" : ""}>Bass</li>
        <li className={step === "drums" ? "selected" : ""}>Drums</li>
      </ol>
    </div>
  );
};

export default OnboardProgressBar;