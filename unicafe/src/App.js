import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return <button type='button' onClick={handleClick}>{text}</button>
}

const Feedback = ({increaseGood, increaseNeutral, increaseBad}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good'></Button>
      <Button handleClick={increaseNeutral} text='neutral'></Button>
      <Button handleClick={increaseBad} text='bad'></Button>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {good > 0 || bad > 0 ? (good - bad) / all : 0}</p>
      <p>positive {all > 0 ? (good / all) * 100 : 0}%</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood((prev) => prev + 1);
  }

  const increaseNeutral = () => {
    setNeutral((prev) => prev + 1);
  }

  const increaseBad = () => {
    setBad((prev) => prev + 1);
  }

  return (
    <div>
      <Feedback increaseGood={increaseGood}
        increaseNeutral={increaseNeutral}
        increaseBad={increaseBad}
      ></Feedback>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App