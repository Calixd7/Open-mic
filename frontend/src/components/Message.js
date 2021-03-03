import { useParams, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProfile, getMessages } from '../api'
import { Transition } from '@headlessui/react'
import PickerArea from './MessageCards/PickerArea'
import Main from './MessageCards/Main'
import MessageList from './MessageCards/MessageList'
import CreateMessage from './MessageCards/CreateMessage'

function Message ({ token, username, messageReceiverUser, isLoggedIn }) {
  const { pk } = useParams()
  const [messages, setMessages] = useState([])
  const [messageId, setMessageId] = useState('')
  const [showReplyMessage, setShowReplyMessage] = useState(false)
  const [messageToRender, setMessageToRender] = useState()
  console.log('messageId', messageId)
  console.log('messages', messages)

  // useEffect(() => {
  //   getProfile(token, pk).then(card => setCard(card))
  // }, [token, pk])
  // console.log('card', card)

  // if (!card) {
  //   return 'loading'
  // }

  useEffect(() => {
    getMessages(token).then(messages => {
      console.log('message', messages)
      setMessages(messages)
    })
  }, [token])

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <div className='h-screen overflow-hidden bg-gray-100 flex flex-col'>
      <div className='flex'>
        <div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100'>
          <MessageList messageId={messageId} setMessageId={setMessageId} messages={messages} />
        </div>
        <div>
          <div className='min-w-0 flex-1 border-t border-gray-200 xl:flex'>
            <Main messageToRender={messageToRender} setMessageToRender={setMessageToRender} setShowReplyMessage={setShowReplyMessage} messageId={messageId} messages={messages} />
          </div>
          <div>
            <CreateMessage messageReceiverUser={messageReceiverUser} messageToRender={messageToRender} username={username} token={token} showReplyMessage={showReplyMessage} />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Message
