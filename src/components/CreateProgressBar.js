import { useContext } from "react";
import { MyContext } from "../MyContext";

function CreateProgressBar(props) {
  const { isVocalsChecked } = useContext(MyContext);
  const step = props.step;

  return (
    <div className="progress-container">
      <ol className="horizontal-list">
        <li className={step === "production" ? "selected" : ""}>Production</li>
        <li className={step === "arrangement" ? "selected" : ""}>Arrangement</li>
        {isVocalsChecked ? 
          <li className={step === "vocals" ? "selected" : ""}>Vocals</li>
        : ""}
      </ol>
    </div>
  );
};

export default CreateProgressBar;