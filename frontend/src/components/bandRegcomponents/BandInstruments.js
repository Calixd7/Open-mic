import { useState } from 'react'

const BandInstruments = ({ setBandInstruments }) => {
  const [numOfInstruments, setNumOfInstruments] = useState(0)

  function createInstrumentFields () {
    const output = []
    for (let i = 0; i < numOfInstruments; i++) {
      output.push({ instrument: '' })
    }
    console.log('output', output)
    setBandInstruments(output)
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
        onChange={e => setNumOfInstruments(e.target.value)}
      />
      <button type='button' onClick={createInstrumentFields}>btn</button>
    </div>
  )
}

export default BandInstruments
