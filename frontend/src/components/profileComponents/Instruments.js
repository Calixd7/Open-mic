import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Instrument = ({ blankInstruments, instruments, setInstruments }) => {
  const length = instruments.length

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
        htmlFor='instrument'
      >What instruments do you play?
      </label>
      <div className='flex flex-col'>
        {instruments.map((instrument, idx) => {
          const instrumentId = `genre-${idx}`
          return (
            <div
              key={`instrument-name-${idx}`}
              className='flex mt-2'
            >
              <input
                className='mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm sm:text-lg border-gray-300 rounded-l-md border-r-0 border bg-gray-50'
                type='text'
                name={instrument.id}
                data-idx={idx}
                placeholder='Enter Instrument'
                value={instrument.instrument}
                onChange={e => handleInstrumentChange(e, e.target.dataset.idx)}
              />
              <button
                type='button'
                data-idx={idx}
                className='border-gray-300 bg-gray-50 rounded-r-md block shadow-sm  mt-1 px-2 border border-l-0'
                onClick={e => removeInstrument(e, instrument.id)}
              >
                <FontAwesomeIcon
                  icon='times'
                  className='text-red-300 text-lg mb-1'
                />
              </button>
              {length - 1 === idx &&
                <button
                  type='button'
                  className='inline-flex justify-center py-1 sm:py-2 px-1 ml-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-32 self-center'
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

export default Instrument
