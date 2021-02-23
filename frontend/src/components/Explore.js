import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Card from './cards/UserCard'
import { getProfiles } from '../api'

function Explore ({ token }) {
  const [showSlide, setShowSlide] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getProfiles(token).then(cards => setCards(cards))
  }, [token])

  return (
    <div>
      <div>
        {/* <button
          className='bg-indigo-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
          id='slide-over-heading'
          aria-haspopup='true'
          onClick={() => setShowSlide(false)}
        >Click Me!
        </button> */}
      </div>
      <div>
        <Card cards={cards} />
      </div>
      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <section
            className='absolute inset-y-0 right-0 pl-10 max-w-full flex'
            aria-labelledby='slide-over-heading'
          >
            <Transition
              show={showSlide}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
                  <div className='px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <h2
                        id='slide-over-heading'
                        className='text-lg font-medium text-gray-900'
                      >
                        Search Settings
                      </h2>
                      <div className='ml-3 h-7 flex items-center'>
                        {/* <button
                          className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          // onClick={() => setShowSlide(false)}
                        >

                          <span className='sr-only'>Close panel</span>

                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none' viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className='mt-6 relative flex-1 px-4 sm:px-6'>

                    <div className='absolute inset-0 px-4 sm:px-6'>
                      <div
                        className='h-full border-2 border-dashed border-gray-200'
                        aria-hidden='true'
                      />
                    </div>

                  </div>
                </div>
              </div>
            </Transition>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Explore
