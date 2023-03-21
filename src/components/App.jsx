import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';

import { FeedbackButton } from './FeedbackButton';
import { Section } from './Section';
import { Statistics } from './Statistics';

import { Container } from './App.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = e => {
    const { id } = e.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positiveFeedbackPercentage() {
  const total = this.totalFeedback();
  return Math.round((this.state.good * 100) / total);
}
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback">
  <FeedbackButton
    options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
    addFeedback={this.addFeedback}
  ></FeedbackButton>
        </Section>

        <Section title="Statistics">
  {!total ? (
   <p>There is no feedback</p>
  ) : (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={this.totalFeedback()}
      positivePercentage={this.positiveFeedbackPercentage()}
    ></Statistics>
  )}
</Section>
        </Container>
    );
  }
};
