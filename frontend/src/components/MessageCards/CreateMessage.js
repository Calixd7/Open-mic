import { useState } from 'react'
import { sendMessage } from '../../api'

function CreateMessage ({ showReplyMessage, token, username, messageToRender }) {
  const [replyMessage, setReplyMessage] = useState('')

  const pendingMessage = {
    sender: username,
    receiver: messageToRender.receiver,
    subject: messageToRender.subject,
    content: replyMessage
  }

  //   if (!messageToRender.receiver) {
  //     return 'loading'
  //   }

  //   console.log('messageToRender.receiver', messageToRender.receiver)

  console.log('showReplyMessage', showReplyMessage)
  console.log('replyMessage', replyMessage)

  function handleSubmit (event) {
    event.preventDefault()
    sendMessage(token, pendingMessage)
      .then(message => console.log('message', message))
  }

  return (
    <div>
      {showReplyMessage &&
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
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
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
