import React, { Component } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandleAddFeedback = ({ currentTarget }) => {
    this.setState(prevState => ({
      [currentTarget.name]: prevState[currentTarget.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions addFeedback={this.heandleAddFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </Section>
    );
  }
}

export default App;
