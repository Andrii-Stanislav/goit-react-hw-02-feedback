import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total }) => {
  const percentageFeedbacks = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <>
      <p className={styles.title}>Statistics</p>
      {total === 0 ? (
        <Notification />
      ) : (
        <>
          <p className={styles.feedback}>Good: {good}</p>
          <p className={styles.feedback}>Neutral: {neutral}</p>
          <p className={styles.feedback}>Bad: {bad}</p>
          <p className={styles.feedback}>Total: {total}</p>
          <p className={styles.feedback}>
            Positive feedbacks: {`${percentageFeedbacks()}%`}
          </p>
        </>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
