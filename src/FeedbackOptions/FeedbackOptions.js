import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({addFeedback}) => {
    return  <div>
        <button className={styles.button} name="good" onClick={addFeedback}>Good</button>
        <button className={styles.button} name="neutral" onClick={addFeedback}>Neutral</button>
        <button className={styles.button} name="bad" onClick={addFeedback}>Bad</button>
    </div> 
}

FeedbackOptions.propTypes = {
    addFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;