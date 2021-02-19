import { useState } from 'react'

const BandInstruments = ({ blankInstruments, bandInstruments, setBandInstruments }) => {
  const [numOfInstruments, setNumOfInstruments] = useState(0)
  const length = bandInstruments.length
  // function createInstrumentFields (event) {
  //   const output = []
  //   for (let i = 0; i < event; i++) {
  //     output.push({ instrument: '' })
  //   }
  //   console.log('output', output)
  //   setBandInstruments(output)
  // }

  // function onNameChange (event, idx) {
  //   const newInstrument = [...bandInstruments]
  //   newInstrument[idx] = {
  //     ...newInstrument[idx],
  //     instrument: event.target.value
  //   }
  //   setBandInstruments(newInstrument)
  // }

  const addInstrument = () => {
    setBandInstruments([...bandInstruments, { ...blankInstruments }])
  }

  const handleInstrumentChange = (e, idx) => {
    const updatedInstrument = [...bandInstruments]
    updatedInstrument[idx] = {
      ...updatedInstrument[idx],
      instrument: e.target.value
    }
    setBandInstruments(updatedInstrument)
  }

  return (
    <div>
      <label
        className='form-label'
        htmlFor='instrument'
      >What instruments does your band currently have?
      </label>
      <div className='flex flex-col'>
        {bandInstruments.map((instrument, idx) => {
          const instrumentId = `genre-${idx}`
          return (
            <div
              key={`instrument-name-${idx}`}
              className='flex mt-2'
            >
              <input
                className='form-text-input pl-4'
                type='text'
                name={instrumentId}
                data-idx={idx}
                required
                placeholder='Enter Instrument'
                value={bandInstruments[idx.instrument]}
                onChange={e => handleInstrumentChange(e, e.target.dataset.idx)}
              />
              {length - 1 === idx &&
                <button
                  type='button'
                  className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36'
                  onClick={addInstrument}
                >Add
                </button>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BandInstruments
