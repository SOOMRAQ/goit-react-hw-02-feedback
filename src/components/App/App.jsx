import React, { Component } from 'react';

import Container from './App.styled';
import WidgetSection from '../WidgetSection';
import WidgetStatistics from '../WidgetStatistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = (good / totalFeedback) * 100;
    return Math.round(positiveFeedback);
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <WidgetSection title="Please leave feedback">
          <FeedbackOptions
            type="button"
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </WidgetSection>
        <WidgetSection title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <WidgetStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </WidgetSection>
      </Container>
    );
  }
}

export default App;
