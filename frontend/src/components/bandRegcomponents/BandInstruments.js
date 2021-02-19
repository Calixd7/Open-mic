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
        className='m-4 p-4'
        htmlFor='size'
      >Number of Instruments
      </label>
      <input
        className='bg-gray-200 m-4 p4 w-10 text-center'
        type='number'
        value={numOfInstruments}
        onChange={e => { createInstrumentFields(e.target.value); setNumOfInstruments(e.target.value) }}
      />
      <div className='flex flex-col'>
        {bandInstruments.map((instrument, idx) => (
          <input
            className='bg-gray-200 p-1 my-1'
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
