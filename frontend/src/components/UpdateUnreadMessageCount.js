import { useEffect } from 'react'

const UpdateUnreadMessageCount = ({ messages, setUnreadStatus, unreadStatus }) => {
  useEffect(() => {
    if (messages.length > 0) {
      const unreadCount = messages.reduce((count, msg) => msg.read ? count : count + 1, 0)
      setUnreadStatus(unreadCount)
    }
  }, [setUnreadStatus, messages])
  return (
    <>
      {unreadStatus > 0
        ? `Messages (${unreadStatus} unread)`
        : 'Messages'}
    </>
  )
}

export default UpdateUnreadMessageCount
