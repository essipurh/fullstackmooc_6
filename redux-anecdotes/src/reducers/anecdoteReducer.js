import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setUpdated(state, action) {
      return state.map(anecdote => anecdote.id !== action.payload.id ? anecdote : action.payload)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
     setAnecdotes(state, action) {
      return action.payload
     }
  }
})

export const {  setUpdated, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const create = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateAnecdote = object => {
  return async dispatch => {
    const updated = await anecdoteService.update(object)
    dispatch(setUpdated(updated))
  }
}
export default anecdoteSlice.reducer
