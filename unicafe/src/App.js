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

const StatisticLine = ({ text, value }) => {
  return(
  <tr>
      <td>{text}</td>
      <td>{value}</td>
  </tr>)
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Statistics</h1>
      {all > 0 ?
        <table>
          <tbody>
            <StatisticLine text='good' value={good}></StatisticLine>
            <StatisticLine text='neutral' value={neutral}></StatisticLine>
            <StatisticLine text='bad' value={bad}></StatisticLine>
            <StatisticLine text='all' value={all}></StatisticLine>
            <StatisticLine text='average' value={(good - bad) / all}></StatisticLine>
            <StatisticLine text='positive' value={`${(good / all) * 100} %`}></StatisticLine>
          </tbody>
        </table> : <p>No feedback given</p>
      }
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