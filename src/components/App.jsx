import { GlobalStyle } from './GlobalStyle';
// import React, { Component } from 'react';
import { useState } from 'react';

import { FeedbackButton } from './FeedbackButton';
import { Section } from './Section';
import { Statistics } from './Statistics';

import { Container } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addFeedback(e) {
    const { id } = e.target;

    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const total = good + bad + neutral;
  const positiveFeedbackPercentage = Math.round((good * 100) / total);

      return (
      <Container>
          <GlobalStyle />
          
        <Section title="Please leave feedback">
  <FeedbackButton
    options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
    addFeedback={addFeedback}
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
      total={total}
      positivePercentage={positiveFeedbackPercentage}
    ></Statistics>
  )}
</Section>
        </Container>
    );
}
  
export {App}



// export class App extends Component {
  // state = {
    // good: 0,
    // neutral: 0,
    // bad: 0
  // };

  // addFeedback = e => {
    // const { id } = e.target;
    // this.setState(prevState => {
      // return { [id]: prevState[id] + 1 };
    // });
  // };

  // totalFeedback() {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  // }

  // positiveFeedbackPercentage() {
  // const total = this.totalFeedback();
  // return Math.round((this.state.good * 100) / total);
// }
  // render() {
    // const { good, neutral, bad } = this.state;
    // const total = this.totalFeedback();
//     return (
//       <Container>
//         <GlobalStyle />
//         <Section title="Please leave feedback">
//   <FeedbackButton
//     options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
//     addFeedback={this.addFeedback}
//   ></FeedbackButton>
//         </Section>

//         <Section title="Statistics">
//   {!total ? (
//    <p>There is no feedback</p>
//   ) : (
//     <Statistics
//       good={good}
//       neutral={neutral}
//       bad={bad}
//       total={this.totalFeedback()}
//       positivePercentage={this.positiveFeedbackPercentage()}
//     ></Statistics>
//   )}
// </Section>
//         </Container>
//     );
//   }
// };
