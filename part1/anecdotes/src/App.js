import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [mystate, setMyState] = useState({
    selected: 0, points: new Uint8Array(10), maxval: 0
  })

  function indexOfMaximumValue(my_array) {
    console.log("my_array:", my_array);
    if (my_array.length === 0) {
        return -1;
    }
    else{
      var maximumValue = my_array[0];
      var maxIndex = 0;
 
      for (var i = 1; i < my_array.length; i++) {
          if (my_array[i] > maximumValue) {
              maxIndex = i;
              maximumValue = my_array[i];
          }
      }
      console.log("maxindex:", maxIndex);
      return maxIndex;
    }
}

  const handleVoteClick = () => {
    const copy = [...mystate.points]
    copy[mystate.selected] += 1
    const newState = {
      selected: mystate.selected,
      points: [...copy],
      maxval: indexOfMaximumValue(copy)
    }
    setMyState(newState)
  }

  const handleNextClick = () => {
    const newState = {
      selected: Math.floor(Math.random() * 8),
      points: [...mystate.points],
      maxval: indexOfMaximumValue([...mystate.points])
    }
    setMyState(newState)
  }
  
  console.log(mystate.maxval);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[mystate.selected]}</p>
      <p>has {mystate.points[mystate.selected]} votes</p>
      <button onClick={handleVoteClick}> vote </button>
      <button onClick={handleNextClick}> next anecdote </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mystate.maxval]}</p>
      <p>has {mystate.points[mystate.maxval]} votes</p>
    </div>
  )
}

export default App