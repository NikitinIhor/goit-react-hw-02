import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notisfaction from "./components/Notisfaction/Notisfaction";
import Options from "./components/Options/Options";
import css from "./App.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [options, setOptions] = useState(() => {
    const feedbackList = localStorage.getItem("feedback-key");
    return feedbackList !== null
      ? JSON.parse(feedbackList)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("feedback-key", JSON.stringify(options));
  }, [options]);

  const totalFeedback = options.good + options.neutral + options.bad;
  const positive = Math.round((options.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setOptions({
      ...options,
      [feedbackType]: options[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          positive={positive}
          totalFeedback={totalFeedback}
          options={options}
        />
      ) : (
        <Notisfaction />
      )}
    </div>
  );
}
