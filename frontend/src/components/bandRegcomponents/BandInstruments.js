import { useState } from 'react'

const BandInstruments = ({ bandInstruments, setBandInstruments }) => {
  const [numOfInstruments, setNumOfInstruments] = useState(0)

  function createInstrumentFields (event) {
    const output = []
    for (let i = 0; i < event; i++) {
      output.push({ instrument: '' })
    }
    console.log('output', output)
    setBandInstruments(output)
  }

  function onNameChange (event, idx) {
    const newInstrument = [...bandInstruments]
    newInstrument[idx] = {
      ...newInstrument[idx],
      instrument: event.target.value
    }
    setBandInstruments(newInstrument)
  }

  return (
    <div>
      <label
        className='block text-sm font-medium text-gray-700'
        htmlFor='size'
      >How many intruments are currently in your band?
      </label>
      <input
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-10 text-center shadow-sm sm:text-sm border-gray-300 rounded-md'
        type='number'
        value={numOfInstruments}
        onChange={e => { createInstrumentFields(e.target.value); setNumOfInstruments(e.target.value) }}
      />
      <div className='flex flex-col'>
        {bandInstruments.map((instrument, idx) => (
          <input
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            key={`instrument-name-${idx}`}
            type='text'
            required
            placeholder='Enter Instrument'
            onChange={e => onNameChange(e, idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default BandInstruments
