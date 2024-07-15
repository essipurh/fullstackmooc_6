import { create } from '../requests'
import { ReactQueryMutation } from '../reactQueryFunctions'
import { setNotification } from '../notificationContext'
import { useNotificationDispatch } from '../notificationContext'

const AnecdoteForm = () => {
  const newAnecdoteMutation = ReactQueryMutation(create, 'anecdotes', true)
  const dispatch = useNotificationDispatch()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    setNotification(dispatch,{ type: 'SET', payload: `anecdote '${content}' created` }, 5)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm