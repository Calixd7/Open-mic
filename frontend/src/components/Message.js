import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProfile, getMessages } from '../api'
import { Transition } from '@headlessui/react'
import PickerArea from './MessageCards/PickerArea'
import Main from './MessageCards/Main'
import MessageList from './MessageCards/MessageList'

function Message ({ token }) {
  const { pk } = useParams()
  const [messages, setMessages] = useState([])
  const [messageId, setMessageId] = useState('')
  console.log('messageId', messageId)

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

  return (
    <div className='h-screen overflow-hidden bg-gray-100 flex flex-col'>
      <div className='mx-auto lg:hidden'>
        <PickerArea messages={messages} />
      </div>
      <div className='flex'>
        <div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100'>
          <MessageList setMessageId={setMessageId} messages={messages} />
        </div>
        <div className='min-w-0 flex-1 border-t border-gray-200 xl:flex'>
          <Main messageId={messageId} messages={messages} />
        </div>
      </div>
    </div>

  )
}
export default Message
