import css from "./Button.module.css";

export default function Button({ children, onUpdate, option }) {
  return (
    <button onClick={() => onUpdate(option)} className={css.button}>
      {children}
    </button>
  );
}
