import React, {useState} from 'react';
import './App.css';

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Header = ({title}) => <h1>{title}</h1>
const Anecdote = ({text}) => <h4>{text}</h4>
const Vote = ({value}) => <b>{value}</b>

const App = (props) => {
  const {anecdotes} = props

  const [next, setNext] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [favourite, setFavourite] = useState(0)

  const handleClickNext = () => {
    const newnext = Math.floor(Math.random() * anecdotes.length)
    setNext(newnext)
  }

  const handleClickVote = () => {
    console.log(points)
    const newpoints = [...points]
    newpoints[next] += 1
    setPoints(newpoints)
    console.log(newpoints)
    console.log(Math.max(...newpoints))
    let newfavourite = newpoints.indexOf(Math.max(...newpoints))
    setFavourite(newfavourite)
  }


  return (
    <div>
      <Header title={'Anecdote of the day'} />
      <Anecdote text={anecdotes[next]} />
      <p>has <Vote value={points[next]} /> votes</p>
      <Button handleClick={handleClickNext} text='next' />
      <Button handleClick={handleClickVote} text='vote' />
      <Header title={'Anecdote with most votes'} />
      <Anecdote text={anecdotes[favourite]} />
    </div>
  )
}

export default App;
