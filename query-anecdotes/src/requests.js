import axios from 'axios'
const baseURl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseURl)
  return response.data
}

export const create = async (newObject) => {
  const response = await axios.post(baseURl, newObject)
  return response.data
}

export const update = async (updatedObject) => {
  const response = await axios.put(`${baseURl}/${updatedObject.id}`, updatedObject)
  return response.data
}