import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProfile } from '../api'
import { Transition } from '@headlessui/react'
import PickerArea from './MessageCards/PickerArea'
import Main from './MessageCards/Main'

function Message ({ token }) {
  const { pk } = useParams()
  const [card, setCard] = useState(null)

  // useEffect(() => {
  //   getProfile(token, pk).then(card => setCard(card))
  // }, [token, pk])
  // console.log('card', card)

  // if (!card) {
  //   return 'loading'
  // }

  return (
    <div className='h-screen overflow-hidden bg-gray-100 flex flex-col'>
      <div className='mx-auto lg:hidden'>
        <PickerArea />
      </div>
      <div className='min-w-0 flex-1 border-t border-gray-200 xl:flex'>
        <Main />
      </div>
    </div>

  )
}
export default Message
