import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BandInstruments = ({ blankInstruments, bandInstruments, setBandInstruments }) => {
  const length = bandInstruments.length

  const addInstrument = () => {
    setBandInstruments([...bandInstruments,
      {
        ...blankInstruments
      }
    ])
  }

  const removeInstrument = (event, idx) => {
    console.log('idx', idx)
    const newInstruments = [
      ...bandInstruments
    ]
    const instrumentName = bandInstruments.map(instrument => instrument.instrument)
    console.log('instrumentName', instrumentName)
    const index = bandInstruments.findIndex(instrument => instrument)
    console.log('index', index)
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
                className='mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-lg border-gray-300 rounded-l-md border-r-0'
                type='text'
                name={instrumentId}
                data-idx={idx}
                required
                placeholder='Enter Instrument'
                value={bandInstruments[idx.instrument]}
                onChange={e => handleInstrumentChange(e, e.target.dataset.idx)}
              />
              <button
                type='button'
                data-idx={idx}
                className='border-gray-300 bg-gray-50 rounded-r-md block shadow-sm  mt-1 px-2 border-0'
                onClick={e => removeInstrument(e, idx)}
              >
                <FontAwesomeIcon
                  icon='times'
                  className='text-red-300 text-lg mb-1'
                />
              </button>
              {length - 1 === idx &&
                <button
                  type='button'
                  className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32'
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
