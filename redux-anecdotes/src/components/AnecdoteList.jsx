import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(({ anecdotes, filter })  => {
    if (!filter) { return anecdotes }
    return anecdotes.filter(anecdote => anecdote.content.match(filter)) // not a good filter, better use regex
  })
  const dispatch = useDispatch()
  const sortedAnecdotes = [...anecdotes].sort((anec1, anec2) => anec2.votes - anec1.votes)

  const handleVote = (anecdote) => {
    dispatch(updateAnecdote({...anecdote, votes: anecdote.votes + 1}))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
    }

  return (
    sortedAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleVote(anecdote)}>vote</button>
        </div>
      </div>
    )
  )
}


export default AnecdoteList