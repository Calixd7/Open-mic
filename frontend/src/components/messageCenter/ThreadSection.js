import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { updateMessage, getMessages } from '../../api'
import MessageSentAlert from '../alerts/MessageSentAlert'
import ReplyEditor from './ReplyEditor'
import NewMessageEditor from './NewMessageEditor'

const ThreadSection = ({ token, messages, setMessages, triggerReadEffect, setTriggerReadEffect, unreadStatus, setUnreadStatus, username, messageReceiverUser, messageReceiverName, setMessageReceiverName, setMessageReceiverUser, name, profilesForMessage, newMessage, setNewMessage, newMessageContent, setNewMessageContent, newMessageSubject, setNewMessageSubject, messageToRender, setMessageToRender, showSent, setMessagesLength, threadStatus }) => {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')

  // ********************
  // DEBUGGING STATION
  // ********************

  // console.log('messages', messages)
  // console.log('date', date)
  // console.log('messages', messages.map(message => message))
  // console.log('messageToRender', messageToRender)
  // console.log('content', content)
  // console.log('messageReceiverUser', messageReceiverUser)

  // ********************
  // DEBUGGING STATION
  // ********************

  if (!messages) {
    return 'loading'
  }

  // Filter all messages into sent and received batches. This allow
  // me to use the same container to display both. The condition on which
  // messages are rendered is set on showSent prop, which is triggered
  // by a btn in the NarrowSidebar.js component

  const renderReceivedMessages = (allMessages) => {
    if (showSent) {
      const sentMessages = allMessages.filter(msg => msg.sender.username === username)
      setMessagesLength(sentMessages.length)
      return sortMessages(sentMessages)
    } else {
      const receivedMessages = allMessages.filter(msg => msg.sender.username !== username)
      setMessagesLength(receivedMessages.length)
      return sortMessages(receivedMessages)
    }
  }

  // sorts both sent and received messages from newest to oldest

  const sortMessages = (receivedMessages) => {
    const sortedMessages = receivedMessages.slice().sort((a, b) => new Date(b.id) - new Date(a.id))
    return sortedMessages
  }

  // this function updates the color coding of each message and the api boolean 'read'. When
  // unread, the message bg is blue. When read, bg is white. If
  // it's unread then it turns it to white on click. It does this by
  // updating the api and then setting the new messages with the
  // new read status.

  const updateReadStatus = (messagetoUpdate) => {
    if (messagetoUpdate.read === false) {
      const newRead = true
      const updateRead = {
        receiver: messagetoUpdate.receiver,
        read: newRead
      }
      updateMessage(token, messagetoUpdate.id, updateRead)
        .then(updatedRead => {
          getMessages(token)
            .then(updatedMessages => {
              setMessages(updatedMessages)
            })
        })
    }
  }

  // This early return renders if the user clicks on a received
  // message. All the other messages disapear and the current message
  // is expanded to render a textfield for reply.

  if (messageToRender) {
    return (
      <div>
        <ReplyEditor token={token} messageToRender={messageToRender} setMessageToRender={setMessageToRender} username={username} content={content} setContent={setContent} showReplyForm={showReplyForm} setShowReplyForm={setShowReplyForm} setShowAlert={setShowAlert} setMessages={setMessages} name={name} profilesForMessage={profilesForMessage} setDate={setDate} date={date} />
      </div>
    )
  }

  // This renders if the user selects "message" on one of the cards
  // in the explore/following components. The card owners name and user
  // is sent here to autopopulat the new message.

  if (messageReceiverUser || newMessage) {
    return (
      <div className='mx-4'>
        <NewMessageEditor token={token} username={username} setShowAlert={setShowAlert} messageReceiverUser={messageReceiverUser} setMessageReceiverUser={setMessageReceiverUser} messageReceiverName={messageReceiverName} setMessageReceiverName={setMessageReceiverName} setMessages={setMessages} name={name} newMessage={newMessage} setNewMessage={setNewMessage} profilesForMessage={profilesForMessage} newMessageContent={newMessageContent} setNewMessageContent={setNewMessageContent} newMessageSubject={newMessageSubject} setNewMessageSubject={setNewMessageSubject} setDate={setDate} date={date} />
      </div>
    )
  }

  // mapping over all messages to render them on the page. There's
  // also an alert that appears after a message has been sent.

  return (
    <>
      {showAlert &&
        <div>
          <MessageSentAlert />
        </div>}
      {renderReceivedMessages(messages).map((message, idx) => (

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
                  {threadStatus === 'Inbox'
                    ? <>
                      <span className='text-indigo-800'>From:&nbsp;</span>
                      <span className='text-gray-600'>{message.name}</span>
                      </>
                    : <>
                      <span className='text-indigo-800'>To:&nbsp;</span>
                      <span className='text-gray-600'>{message.receiver_name}</span>
                    </>}

                </div>
              </h3>
              <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                <span dateTime='2021-01-28T19:24'>
                  {message.created_at}
                </span>
              </p>
            </div>
            <div className='sm:flex sm:justify-between sm:items-baseline mt-4'>
              <div>
                <p className='text-base font-medium'>
                  <span className='text-indigo-800'>Subject:&nbsp;</span>
                  <span className='text-gray-900'>{message.subject}</span>
                </p>
              </div>
            </div>
            <div className='sm:flex sm:justify-between sm:items-baseline mt-8'>
              <p className='text-base font-medium'>
                <span className='text-indigo-800'>Message:&nbsp;</span>
                <span className='text-gray-800'>{message.content}</span>
              </p>
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
