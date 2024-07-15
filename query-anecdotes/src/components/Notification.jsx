import { useContext } from "react"
import { useNotificationValue } from "../notificationContext"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  const msg = useNotificationValue()
  if (!msg) return null

  return (
    <div style={style}>
      {msg}
    </div>
  )
}

export default Notification
