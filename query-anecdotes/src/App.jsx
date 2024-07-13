import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll, update  } from './requests'
import { ReactQueryMutation, ReactQuery } from './reactQueryFunctions'

const App = () => {
  const newAnecdoteMutation = ReactQueryMutation(update,'anecdotes')
  const handleVote = (anecdote) => {
    const updatedVotes = { ...anecdote, votes: anecdote.votes +1 }
    console.log(updatedVotes)
    newAnecdoteMutation.mutate(updatedVotes)
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
