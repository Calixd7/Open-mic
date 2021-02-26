import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const INSTRUMENTS = [
  'Whatever',
  'Farts',
  'poop',
  'Pizzahut'
]

const Instrument = ({ instruments, setInstruments, status }) => {
  const [showInstruments, setShowInstruments] = useState(false)

  // const length = instruments.length

  const removeInstrument = (event, id) => {
    const newInstruments = [
      ...instruments
    ]
    setInstruments(newInstruments.filter((inst) => inst.id !== id))
  }

  const handleInstrumentChange = (e, instrument) => {
    const updatedInstrument = [...instruments, instrument]
    setInstruments(updatedInstrument)
  }

  return (
    <div>
      <label id='listbox-label' className='block text-sm font-medium text-gray-700'>
        Assigned to
      </label>
      <div className='mt-1 relative'>
        <button
          type='button' aria-haspopup='listbox' aria-expanded='true' aria-labelledby='listbox-label' className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          onClick={() => setShowInstruments(showInstruments => !showInstruments)}
        >
          <span className='block truncate'>
            Tom Cook
          </span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            {/* <!-- Heroicon name: solid/selector --> */}
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

          <div className='absolute mt-1 w-full rounded-md bg-white shadow-lg'>
            <ul tabIndex='-1' role='listbox' aria-labelledby='listbox-label' aria-activedescendant='listbox-item-3' className='max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
              {/* <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        --> */}
              {INSTRUMENTS.map((instrument, idx) => (
                <li
                  key={`instrument-${instrument}`}
                  id='listbox-option-0'
                  // role='option'
                  className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                  onClick={(e) => handleInstrumentChange(e, instrument)}
                >
                  {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                  <span className='font-normal block truncate'>
                    {instrument}
                  </span>

                  {/* <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
                </li>
              ))}

            </ul>
          </div>
        </Transition>
      </div>
      <div>
        {instruments.map((instrument, idx) => (
          <div key={`${instrument}-${idx}`}>{instrument}</div>
        ))}
      </div>
    </div>
  )
}

export default Instrument

//
