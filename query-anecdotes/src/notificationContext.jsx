import { createContext, useContext, useReducer  } from 'react'
import PropTypes from 'prop-types'

const notificationReducer = (state,action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotificationValue = (value = 0) => {
  const valueAndDispatch = useContext(NotificationContext)
  return valueAndDispatch[value]
}
export const useNotificationDispatch = () => {
  return useNotificationValue(1)
}

export const setNotification = (dispatch, typePayload, timeSeconds) => {
  dispatch(typePayload)
  setTimeout(() => { dispatch({type: 'SET', payload: ''}) }, timeSeconds*1000)
}

export const NotificationContextProvider = (props) => {
  const [notificationMsg, notificationDispatch] = useReducer(notificationReducer, null)
  return (
    <NotificationContext.Provider value={[notificationMsg, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}
NotificationContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default NotificationContext