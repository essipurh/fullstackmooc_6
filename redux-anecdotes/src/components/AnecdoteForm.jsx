import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    const newNote = await anecdoteService.createNew(anecdoteContent)
    dispatch(create(newNote))
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