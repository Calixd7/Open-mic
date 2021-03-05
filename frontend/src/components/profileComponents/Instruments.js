import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { INSTRUMENTS } from '../helperLists'

const Instrument = ({ instruments, setInstruments, status }) => {
  const [showInstruments, setShowInstruments] = useState(false)

  const removeInstrument = (event, idx) => {
    const newInstruments = [
      ...instruments
    ]
    newInstruments.splice(idx, 1)
    setInstruments(newInstruments)
  }

  const handleInstrumentChange = (e, instrument) => {
    const updatedInstrument = [...instruments, instrument]
    setInstruments(updatedInstrument)
  }

  return (
    <div className='flex justify-between'>
      <div className='mr-4'>
        <label id='listbox-label' className='form-label'>
          {status === 'Band'
            ? 'What instruments does your band play?'
            : 'What instruments do you play?'}
        </label>
        <div className='mt-1 relative'>
          <button
            type='button' aria-haspopup='listbox' aria-expanded='true' aria-labelledby='listbox-label' className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            onClick={() => setShowInstruments(showInstruments => !showInstruments)}
          >
            <span className='block truncate text-center text-sm sm:text-md'>
              {instruments.length < 1
                ? '–– Select an Instrument ––'
                : '–– Add an Instrument ––'}
            </span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path fillRule='evenodd' d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </span>
          </button>
          <Transition
            show={showInstruments}
            enter=''
            enterFrom=''
            enterTo=''
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='absolute mt-1 w-full rounded-md bg-gray-50 shadow-lg'>
              <ul tabIndex='-1' role='listbox' aria-labelledby='listbox-label' aria-activedescendant='listbox-item-3' className='max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {INSTRUMENTS.map((instrument, idx) => (
                  <li
                    key={`instrument-${instrument}`}
                    id={`instrument-${instrument}`}
                    role='option'
                    className='hover:text-white hover:bg-indigo-600 text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                    onClick={(e) => handleInstrumentChange(e, instrument)}
                  >
                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                    <span
                      className='font-normal block truncate'
                    >
                      {instrument}
                    </span>
                  </li>
                ))}

              </ul>
            </div>
          </Transition>
        </div>
      </div>
      <div className='mt-4'>
        {instruments.map((instrument, idx) => (
          <div
            key={`${instrument}-${idx}`}
            className='flex'
          >
            <div
              className='text-sm text-left font-normal mt-2 w-24'
            >{instrument}
            </div>
            <button
              type='button'
              // data-idx={idx}
              className='border-none bg-none rounded-r-md block mt-1 px-2'
              onClick={e => removeInstrument(e, idx)}
            >
              <FontAwesomeIcon
                icon='times'
                className='text-red-300 hover:text-red-500 text-lg mb-1'
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instrument

//
