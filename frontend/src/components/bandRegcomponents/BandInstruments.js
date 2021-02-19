import { useState } from 'react'

const BandInstruments = ({ blankInstruments, bandInstruments, setBandInstruments }) => {
  const [numOfInstruments, setNumOfInstruments] = useState(0)

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
  }

  return (
    <div>
      <div className='flex flex-col'>
        {bandInstruments.map((instrument, idx) => {
          const instrumentId = `genre-${idx}`
          return (
            <div key={`instrument-name-${idx}`}>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BandInstruments
