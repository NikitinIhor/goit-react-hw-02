import css from "./Feedback.module.css";
export default function Feedback({
  options: { good, neutral, bad },
  positive,
  totalFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>
        <p>Good :</p> <span>{good}</span>
      </li>
      <li>
        <p>Neutral :</p> <span>{neutral}</span>
      </li>
      <li>
        <p>Bad :</p> <span>{bad}</span>
      </li>
      <li>
        <p>Tota :</p> <span>{totalFeedback}</span>
      </li>
      <li>
        <p>Positive :</p> <span>{positive}%</span>
      </li>
    </ul>
  );
}
