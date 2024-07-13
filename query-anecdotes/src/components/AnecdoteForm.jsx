import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { create } from '../requests'
import { ReactQueryMutation } from '../reactQueryFunctions'

const AnecdoteForm = () => {
  const newAnecdoteMutation = ReactQueryMutation(create, 'anecdotes')

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({ content, votes: 0 })
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
