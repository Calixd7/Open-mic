import { useState } from 'react'
import { sendMessage } from '../../api'
import Alert from '../Alert'

function CreateMessage ({ showReplyMessage, token, username, messageToRender, messageReceiverUser }) {
  const [content, setContent] = useState('')
  const [subject, setSubject] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const pendingReplyMessage = {
    sender: username,
    // receiver: messageToRender.receiver,
    // subject: messageToRender.subject,
    content: content
  }

  const pendingNewMessage = {
    sender: username,
    receiver: messageReceiverUser,
    subject: subject,
    content: content
  }

  //   if (!messageToRender.receiver) {
  //     return 'loading'
  //   }

  //   console.log('messageToRender.receiver', messageToRender.receiver)

  //   console.log('showReplyMessage', showReplyMessage)
  //   console.log('message receiver', messageReceiverUser)
  console.log('subject', subject)
  console.log('content', content)

  function handleSubmit (event) {
    event.preventDefault()
    if (showReplyMessage) {
      sendMessage(token, pendingReplyMessage)
        .then(message => console.log('message', message))
    } else {
      sendMessage(token, pendingNewMessage)
        .then(message => console.log('message', message))
      setShowAlert(true)
    }
  }

  if (showAlert) {
    return (
      <div>
        <Alert />
      </div>
    )
  }

  if (showReplyMessage) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor='about'
            className='form-label'
          >
            Message
          </label>
          <div className='mt-1'>
            <textarea
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
              name='bio'
              id='bio'
              rows='3'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button
              type='submit'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      {messageReceiverUser &&
        <div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor='about'
              className='form-label'
            >
              Message {messageReceiverUser}
            </label>
            <div>
              <label
                className='form-label'
                htmlFor='name'
              >
                Subject:
              </label>
              <input
                className='form-text-input'
                type='text'
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
            </div>
            <div className='mt-1'>
              <textarea
                className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
                name='bio'
                id='bio'
                rows='3'
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <button
                type='submit'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Send
              </button>
            </div>
          </form>
        </div>}
    </div>
  )
}

export default CreateMessage
