import { useSelector, useDispatch } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter})  => {
    if (!filter) {
      return anecdotes.sort((anec1, anec2) => anec2.votes - anec1.votes)
    }
    return anecdotes.filter(anecdote => anecdote.content.match(filter)) // not a good filter, better use regex
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(actionVote(id))
  }

  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}


export default AnecdoteList