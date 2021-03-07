import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { deleteMessage, updateMessage, getMessages } from '../../api'
import MessageSentAlert from '../alerts/MessageSentAlert'
import ReplyEditor from './ReplyEditor'
import NewMessageEditor from './NewMessageEditor'

const ThreadSection = ({ token, messages, setMessages, triggerReadEffect, setTriggerReadEffect, unreadStatus, setUnreadStatus, username, messageReceiverUser, setMessageReceiverUser }) => {
  const [read, setRead] = useState(false)
  // const [message, setMessage] = useState([])
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [messageToRender, setMessageToRender] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    console.log('read useffect JUST RAN')
    const unread = []
    messages.forEach(message => {
      if (message.read === false) {
        unread.push(message)
        // console.log('unread', unread.length)
      }
      if (unread.length > 0) {
        setUnreadStatus(unread.length)
      }
      if (unread.length === 0) {
        setUnreadStatus(0)
      }
    })
  }, [])

  // console.log('messages', messages.map(message => message))
  // console.log('messageToRender', messageToRender)
  // console.log('content', content)
  // console.log('messageReceiverUser', messageReceiverUser)

  if (!messages) {
    return 'loading'
  }

  // const handleDelete = () => {
  //   deleteMessage(token, message.id).then(res => res)
  // }

  const updateReadStatus = (messagetoUpdate) => {
    if (messagetoUpdate.read === false) {
      setRead(true)

      const updateRead = {
        receiver: messagetoUpdate.receiver,
        read: read
      }

      updateMessage(token, messagetoUpdate.id, updateRead)
        .then(updatedRead => {
          getMessages(token)
            .then(updatedMessages => {
              setMessages(updatedMessages)
              const unread = []
              updatedMessages.forEach(updatedMessage => {
                if (updatedMessage.read === false) {
                  unread.push(updatedMessage)
                  console.log('unread', unread.length)
                }
                if (unread.length === 0) {
                  setUnreadStatus(0)
                }
                if (unread.length > 0) {
                  setUnreadStatus(unread.length)
                }
              })
            })
        })
    }
  }

  if (messageToRender) {
    return (
      <div>
        <ReplyEditor token={token} messageToRender={messageToRender} setMessageToRender={setMessageToRender} username={username} content={content} setContent={setContent} showReplyForm={showReplyForm} setShowReplyForm={setShowReplyForm} setShowAlert={setShowAlert} setMessages={setMessages} />
      </div>
    )
  }

  if (messageReceiverUser) {
    return (
      <div className='mx-4'>
        <NewMessageEditor token={token} username={username} setShowAlert={setShowAlert} messageReceiverUser={messageReceiverUser} setMessageReceiverUser={setMessageReceiverUser} setMessages={setMessages} />
      </div>
    )
  }

  return (
    <>
      {showAlert &&
        <div>
          <MessageSentAlert />
        </div>}
      {messages.map((message, idx) => (
        <ul
          key={`message-${idx}`}
          className='py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8'
          onClick={() => {
            setMessageToRender(message)
            updateReadStatus(message)
            setShowReplyForm(true)
            setShowAlert(false)
          }}
        >
          <li className={`${message.read ? 'bg-white hover:bg-gray-100' : 'bg-blue-200 hover:bg-blue-300'} px-4 py-6 shadow sm:rounded-lg sm:px-6`}>
            <div className='sm:flex sm:justify-between sm:items-baseline'>
              <h3 className='text-base font-medium'>
                <div>
                  <span className='text-gray-600'>From:&nbsp;</span>
                  <span className='text-gray-900'>{message.sender.username}</span>
                </div>
                <div>
                  <span className='text-gray-600'>To:&nbsp;</span>
                  <span className='text-gray-900'>{message.receiver}</span>
                </div>
              </h3>
              <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                <time dateTime='2021-01-28T19:24'>{message.created_at}</time>
              </p>
            </div>
            <div className='sm:flex sm:justify-between sm:items-baseline mt-4'>
              <p className='text-base font-medium'>
                <span className='text-gray-900'>Subject:&nbsp;</span>
                <span className='text-gray-600'>{message.subject}</span>
              </p>
            </div>
            <div className='mt-4 space-y-6 text-sm text-gray-800'>
              <p>{message.content}</p>
            </div>
            <Transition
              show={showReplyForm}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            />
          </li>

        </ul>
      ))}

    </>
  )
}

export default ThreadSection
