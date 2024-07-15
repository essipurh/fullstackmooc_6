import { ReactQueryMutation, ReactQuery } from './reactQueryFunctions'
import { useNotificationDispatch, setNotification } from './notificationContext'
import { useReducer } from 'react'
import { getAll, update  } from './requests'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'



const App = () => {

  const updateAnecdoteMutation = ReactQueryMutation(update, 'anecdotes')
  const dispatch = useNotificationDispatch()

  const handleVote =  (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    setNotification(dispatch,{ type: 'SET', payload: anecdote.content }, 5)
  }

  const result = ReactQuery(getAll, 'anecdotes', 1)

  if (result.isLoading) {
    return <div>Fetching data...</div>
  }
  if (result.isError) {
    return <div>anecdote service not available due to problems in the server</div>
  }

  const anecdotes = result.data
  
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
