import { useDispatch } from 'react-redux'
import { actionCreate } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(actionCreate(anecdoteContent))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='newAnecdote'
          />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}


export default AnecdoteForm