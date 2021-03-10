import { useEffect } from 'react'

const UpdateUnreadMessageCount = ({ token, messages, setUnreadStatus, unreadStatus, username }) => {
  useEffect(() => {
    const receivedMessages = messages.filter(msg => msg.sender.username !== username)
    if (receivedMessages.length > 0) {
      const unreadCount = receivedMessages.reduce((count, msg) => msg.read ? count : count + 1, 0)
      setUnreadStatus(unreadCount)
    }
  }, [messages])

  return (
    <>
      {unreadStatus > 0
        ? `Messages (${unreadStatus} unread)`
        : 'Messages'}
    </>
  )
}

export default UpdateUnreadMessageCount
