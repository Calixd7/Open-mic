import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { deleteMessage, updateMessage, sendMessage } from '../../api'
import MessageSentAlert from '../alerts/MessageSentAlert'
import ReplyEditor from './ReplyEditor'

const ThreadSection = ({ token, messages, setMessages, messageId, setMessageId, setTriggerUseEffect, checkUnread, setCheckUnread, username }) => {
  const [read, setRead] = useState(false)
  const [message, setMessage] = useState([])
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [messageToRender, setMessageToRender] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [content, setContent] = useState('')
  const updateRead = {
    receiver: message.receiver,
    read: read
  }
  console.log('messages', messages.map(message => message))
  console.log('message', message)
  console.log('messageId', messageId)
  console.log('messageToRender', messageToRender)
  console.log('content', content)
  console.log('token in THREAD section', token)

  useEffect(() => {
    console.log('useffect JUST RAN')
    const unread = []
    messages.forEach(message => {
      if (message.read === false) {
        unread.push(message)
        console.log('unread', unread.length)
      }
      if (unread.length === 0) {
        setCheckUnread(0)
      }
      if (unread.length > 0) {
        setCheckUnread(unread.length)
      }
    })
  }, [])

  useEffect(() => {
    const messageSearch = messages.map(message => message)
    console.log('messageSearch', messageSearch)

    messageSearch.forEach(message => {
      if (messageId === message.id) {
        setMessageToRender(message)
      }
    })
  }, [messageId])

  if (!messages) {
    return 'loading'
  }

  const handleDelete = () => {
    deleteMessage(token, message.id).then(res => res)
  }

  const handleRead = (id) => {
    updateMessage(token, id, updateRead)
      .then(data => setTriggerUseEffect(true))
  }

  const toggleRead = (message) => {
    if (message.read === false) {
      setRead(true)
    }
    if (message.read === true) {
      setRead(false)
    }
    handleRead(message.id)
  }

  if (messageToRender) {
    return (
      <div>
        <ReplyEditor token={token} messageToRender={messageToRender} setMessageToRender={setMessageToRender} username={username} content={content} setContent={setContent} message={message} setMessage={setMessage} showReplyForm={showReplyForm} setShowReplyForm={setShowReplyForm} setShowAlert={setShowAlert} messageId={messageId} />
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
            setMessageId(message.id)
            toggleRead(message)
            setMessage(message)
            setShowReplyForm(showReplyForm => !showReplyForm)
            setShowAlert(false)
          }}
        >
          <li className={`${message.read ? 'bg-white hover:bg-gray-100' : 'bg-blue-200 hover:bg-blue-300'} px-4 py-6 shadow sm:rounded-lg sm:px-6`}>
            <div className='sm:flex sm:justify-between sm:items-baseline'>
              <h3 className='text-base font-medium'>
                <span className='text-gray-900'>{message.sender.username}&nbsp;</span>
                <span className='text-gray-600'>wrote</span>
              </h3>
              <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                <time dateTime='2021-01-28T19:24'>{message.created_at}</time>
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
            >
              Something to keep if from breaking
            </Transition>
          </li>

        </ul>
      ))}

    </>
  )
}

export default ThreadSection
