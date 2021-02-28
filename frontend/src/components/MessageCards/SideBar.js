
const SideBar = ({ messages }) => {
  console.log('messages', messages)
  return (
    <div>
      {messages.map(message => {
        return (
          <div key={message.subject}>
            {message.subject}
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
