import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {
  const [feedbackCount, setFeedbackCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedback => {
    setFeedbackCount(prevCount => ({
      ...prevCount,
      [feedback]: prevCount[feedback] + 1,
    }));
  };

  const { good, neutral, bad } = feedbackCount;
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
