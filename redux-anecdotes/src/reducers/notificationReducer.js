import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload
    },
  }
})

export const { setNotificationMessage } = notificationSlice.actions
export const setNotification = ( message, timeSeconds) => {
  return dispatch => {
    dispatch(setNotificationMessage(message))
    setTimeout(() => { dispatch(setNotification('')) }, timeSeconds*1000)
  }
}
export default notificationSlice.reducer
