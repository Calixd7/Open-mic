import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const Instrument = ({ blankInstruments, instruments, setInstruments, status }) => {
  const [showInstruments, setShowInstruments] = useState(false)

  // const length = instruments.length

  const addInstrument = () => {
    const id = instruments.length === 0
      ? 1
      : instruments[instruments.length - 1].id + 1

    setInstruments([...instruments,
      {
        ...blankInstruments,
        id: id + 1
      }
    ])
  }

  const removeInstrument = (event, id) => {
    const newInstruments = [
      ...instruments
    ]
    setInstruments(newInstruments.filter((inst) => inst.id !== id))
  }

  const handleInstrumentChange = (e, idx) => {
    const updatedInstrument = [...instruments]
    updatedInstrument[idx] = {
      ...updatedInstrument[idx],
      instrument: e.target.value
    }
    setInstruments(updatedInstrument)
  }

  return (
    <div>
      <label
        className='form-label'
        id='listbox-label'
        htmlFor='instrument'
      >
        {status === 'Band'
          ? 'What instruments does your band play?'
          : 'What instruments do you play?'}

      </label>
      <div className='flex flex-col'>
        {instruments.map((instrument, idx) => {
          return (
            <div
              key={`instrument-name-${idx}`}
              className='mt-1 relative'
            >
              <button
                type='button'
                aria-haspopup='listbox'
                aria-expanded='true'
                aria-labelledby='listbox-label'
                className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                onClick={() => setShowInstruments(showInstruments => !showInstruments)}
              >

                <span
                  className='block truncate'
                  type='text'
                  name={instrument.id}
                  data-idx={idx}
                  placeholder='Enter Instrument'
                  value={instrument.instrument}
                  onChange={e => handleInstrumentChange(e, e.target.dataset.idx)}
                >
                  Acoustic Guitar
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
                    <li id='listbox-option-0' role='option' className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'>
                      {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                      <span
                        className='font-normal block truncate'
                        onClick={() => setInstruments(false)}
                      >
                        Electric Guitar
                      </span>

                      {/* <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
                      <span className='text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4'>
                        {/* <!-- Heroicon name: solid/check --> */}
                        <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </span>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Instrument

// {/* <div */}
//           key={`instrument-name-${idx}`}
//           className='flex mt-2'
//         >
//           <input
//             className='mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-lg border-gray-300 rounded-l-md border-r-0 border bg-gray-50'
//             type='text'
//             name={instrument.id}
//             data-idx={idx}
//             placeholder='Enter Instrument'
//             value={instrument.instrument}
//             onChange={e => handleInstrumentChange(e, e.target.dataset.idx)}
//           />
//           <button
//             type='button'
//             data-idx={idx}
//             className='border-gray-300 bg-gray-50 rounded-r-md block shadow-sm  mt-1 px-2 border border-l-0'
//             onClick={e => removeInstrument(e, instrument.id)}
//           >
//             <FontAwesomeIcon
//               icon='times'
//               className='text-red-300 text-lg mb-1'
//             />
//           </button>
//           {length - 1 === idx &&
//             <button
//               type='button'
//               className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 self-center'
//               onClick={addInstrument}
//             >Add
//             </button>}
//         </div>
//       )
//     })}
//   </div>
// </div>
