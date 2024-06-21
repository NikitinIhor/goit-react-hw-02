import Button from "../Button/Button";
import css from "./Options.module.css";

export default function Options({ onUpdate, totalFeedback, resetFeedback }) {
  return (
    <div className={css.options}>
      <Button onUpdate={onUpdate} option="good">
        good
      </Button>
      <Button onUpdate={onUpdate} option="neutral">
        neutral
      </Button>
      <Button onUpdate={onUpdate} option="bad">
        bad
      </Button>
      {totalFeedback > 0 && (
        <button className={css.reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
