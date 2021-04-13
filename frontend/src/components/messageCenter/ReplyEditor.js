import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { sendMessage, getMessages, deleteMessage } from '../../api'
import { dateStamp } from '../helperFunctions'

const ReplyEditor = ({ token, messageToRender, username, content, setContent, setMessageToRender, showReplyForm, setShowReplyForm, setShowAlert, setMessages, name, profilesForMessage, setDate, date }) => {
  const [receiverName, setReceiverName] = useState('')
  useEffect(() => {
    profilesForMessage.forEach(profile => {
      if (profile.user === messageToRender.sender.username) {
        setReceiverName(profile.name)
      }
    })
  }, [showReplyForm])

  if (!messageToRender) {
    return ''
  }

  console.log('receiverName', receiverName)

  // const pendingReplyMessage = {
  //   sender: username,
  //   receiver: messageToRender.sender.username,
  //   name: name,
  //   receiver_name: receiverName,
  //   subject: messageToRender.subject,
  //   content: content
  // }
  // console.log('messageToRender', messageToRender)
  // console.log('messageToRender.receiver', messageToRender.sender.username)

  function handleSubmit (event) {
    event.preventDefault()
    dateStamp(new Date())
      .then(date => {
        setDate(date)
        sendMessage(token, date, username, messageToRender.sender.username, name, receiverName, messageToRender.subject, content)
          .then(sentMessage => {
            getMessages(token)
              .then(updatedMessages => {
                setMessages(updatedMessages)
                setShowReplyForm(false)
                setShowAlert(true)
                setMessageToRender(null)
              })
          })
      })
  }
  const handleDelete = (id) => {
    deleteMessage(token, id)
      .then(res => {
        getMessages(token)
          .then(messages => {
            setMessageToRender(null)
            setMessages(messages)
          })
      })
  }

  return (

    <div>
      {messageToRender &&
        <ul
          className='py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8'
        >
          <li
            className='bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6'
          >
            <div className='sm:flex sm:justify-between sm:items-baseline'>
              <h3 className='text-base font-medium'>
                <span className='text-indigo-800'>Reply to:&nbsp;</span>
                <span className='text-gray-600'>{receiverName}</span>
              </h3>
              <p className='mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3'>
                <time dateTime='2021-01-28T19:24'>{date}</time>
              </p>
            </div>
            <div className='sm:flex sm:justify-between sm:items-baseline mt-4'>
              <p className='text-base font-medium'>
                <span className='text-indigo-800'>Subject:&nbsp;</span>
                <span className='text-gray-600'>{messageToRender.subject}</span>
              </p>
            </div>
            <div className='sm:flex sm:justify-between sm:items-baseline my-8'>
              <p className='text-base font-medium'>
                <span className='text-indigo-800'>Message:&nbsp;</span>
                <span className='text-gray-600'>{messageToRender.content}</span>
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
            >
              <div className='flex justify-between'>
                <div className='min-w-0 flex-1'>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor='comment' className='sr-only'>About</label>
                      <textarea id='comment' name='comment' rows='3' className='shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md' placeholder='Reply' onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className='mt-3 flex items-center justify-between'>
                      <button
                        type='button'
                        className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => {
                          setMessageToRender(null)
                          setShowReplyForm(false)
                        }}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-auto'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                        Cancel
                      </button>
                      <button
                        type='button'
                        className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => {
                          handleDelete(messageToRender.id)
                        }}
                      >
                        {/* <!-- Heroicon name: solid/trashcan --> */}
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='mr-2.5 h-5 w-5 text-gray-400'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                        </svg>
                        <span>Delete</span>
                      </button>
                      <button
                        type='submit'
                        className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        {/* <!-- Heroicon name: solid/reply --> */}
                        <svg className='mr-2.5 h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                          <path fillRule='evenodd' d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                        <span>Reply</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition>
          </li>
        </ul>}
    </div>

  )
}

export default ReplyEditor
