import { useState } from 'react'
import { sendMessage, getMessages } from '../../api'
import { Transition } from '@headlessui/react'
import { faUsersSlash } from '@fortawesome/free-solid-svg-icons'

const NewMessageEditor = ({ token, username, messageReceiverUser, setMessageReceiverUser, messageReceiverName, setMessageReceiverName, setShowAlert, setMessages, name, newMessage, setNewMessage, profilesForMessage, newMessageContent, setNewMessageContent, newMessageSubject, setNewMessageSubject }) => {
  const [showRecipients, setShowRecipients] = useState(false)

  const pendingNewMessage = {
    sender: username,
    receiver: messageReceiverUser,
    name: name,
    receiver_name: messageReceiverName,
    subject: newMessageSubject,
    content: newMessageContent
  }

  function handleSubmit (event) {
    event.preventDefault()
    sendMessage(token, pendingNewMessage)
      .then(message => {
        getMessages(token)
          .then(messages => {
            setMessages(messages)
            setMessageReceiverUser('')
            setMessageReceiverName('')
            setShowAlert(true)
          })
      })
  }

  const selectRecipient = () => {
    return (
      <div className='mt-1 relative'>
        <button
          type='button' aria-haspopup='listbox' aria-expanded='true' aria-labelledby='listbox-label' className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          onClick={() => setShowRecipients(showRecipients => !showRecipients)}
        >
          <span className='block truncate text-center text-sm sm:text-md'>
            {messageReceiverName || '–– Select Recipient ––'}

          </span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path fillRule='evenodd' d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </span>
        </button>
        <Transition
          show={showRecipients}
          enter=''
          enterFrom=''
          enterTo=''
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute mt-1 w-full rounded-md bg-gray-50 shadow-lg'>
            <ul tabIndex='-1' role='listbox' aria-labelledby='listbox-label' aria-activedescendant='listbox-item-3' className='max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
              {profilesForMessage.map((profile, idx) => (
                <li
                  key={`profile-${idx}`}
                  id={`profile-${profile}`}
                  data-idx={idx}
                  value={messageReceiverName}
                  className='hover:text-white hover:bg-indigo-600 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                  onClick={() => {
                    setMessageReceiverUser(profile.user)
                    setMessageReceiverName(profile.name)
                    setShowRecipients(false)
                  }}
                >
                  {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                  <span
                    className='font-normal block truncate'
                  >
                    {profile.name}
                  </span>
                </li>
              ))}

            </ul>
          </div>
        </Transition>
      </div>
    )
  }

  return (
    <div>
      <div className='flex justify-between'>
        <div className='min-w-0 flex-1'>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='about'
                className='form-label'
              >
                {newMessage
                  ? selectRecipient()
                  : `Message to: ${messageReceiverName}
              `}

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
                  value={newMessageSubject}
                  onChange={e => setNewMessageSubject(e.target.value)}
                />
              </div>
              <label htmlFor='comment' className='sr-only'>About</label>
              <textarea
                id='comment'
                name='comment'
                rows='3'
                className='shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md'
                placeholder='New Message'
                value={newMessageContent}
                onChange={(e) => setNewMessageContent(e.target.value)}
              />
            </div>
            <div className='mt-3 flex items-center justify-between'>
              <button
                type='button'
                className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => {
                  setMessageReceiverUser('')
                  setMessageReceiverName('')
                }}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-auto'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
                Cancel
              </button>
              <button
                type='submit'
                className='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {/* <!-- Heroicon name: solid/reply --> */}
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='mr-2.5 h-5 w-5 text-gray-400'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                </svg>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewMessageEditor
