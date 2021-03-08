import { Transition } from '@headlessui/react'
import { searchProfiles } from '../api'
import { GENRES, INSTRUMENTS, LOCATION } from './helperLists'

function SearchMobile ({ token, setCards, showSearch, setShowSearch, status, setStatus, genre, setGenre, instrument, setInstrument, wantedInstrument, setWantedInstrument, location, setLocation, vacancy, setVacancy }) {
  function handleSearch (e) {
    e.preventDefault()
    let newWanted = ''
    let newVacancy = null
    if (wantedInstrument === 'any') {
      newWanted = ''
      newVacancy = true
    } else if (wantedInstrument === '') {
      newWanted = ''
      newVacancy = null
    } else {
      newWanted = wantedInstrument
      newVacancy = null
    }
    searchProfiles(token, status, location, genre, newVacancy, instrument, newWanted)
      .then(cards => setCards(cards))
  }
  return (
    <div className='fixed inset-0 overflow-hidden z-10 '>
      <div className='absolute inset-0 overflow-hidden'>
        <section className='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16' aria-labelledby='slide-over-heading'>

          {/* Slide-over panel, show/hide based on slide-over state. */}
          <Transition
            show={showSearch}
            enter='transform transition ease-in-out duration-500 sm:duration-700'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-500 sm:duration-700'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='max-w-md'>
              <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(e)
                  }}
                >
                  <div className='p-6'>
                    <div className='flex items-start justify-between'>
                      <h2 id='slide-over-heading' className='text-lg font-medium text-gray-900'>
                        Search
                      </h2>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
                          onClick={() => setShowSearch(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          {/* <!-- Heroicon name: outline/x --> */}
                          <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-gray-200'>

                    <span className='flex'>
                      <div className='px-6 mb-2 h-full'>
                        <button
                          type='submit'
                          className='mb-1 inline-flex items-center px-2.5 py-1.5 h-1/2 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                          </svg>
                          <span>Search</span>
                        </button>
                      </div>

                      <div className='px-6 mb-2 h-full'>
                        <button
                          type='button'
                          className='mb-1 inline-flex items-center px-2.5 py-1.5 h-1/2 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={() => {
                            setStatus('')
                            setLocation('')
                            setGenre('')
                            setInstrument('')
                            setVacancy(null)
                            setWantedInstrument('')
                          }}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='ml-0.5 mr-2 h-4 w-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                          </svg>
                          <span>Clear Search</span>
                        </button>
                      </div>
                    </span>

                  </div>
                  <ul className='divide-y divide-gray-200 overflow-y-auto'>
                    <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='status'
                            name='status'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setStatus(e.currentTarget.value)}
                          >
                            <option value=''>any</option>
                            <option value='Individual'>Solo Artist</option>
                            <option value='Band'>Band</option>
                          </select>
                        </span>
                        <label htmlFor='status' className='block text-sm text-center font-medium text-gray-700'>Status</label>
                      </div>
                    </li>

                    <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='location'
                            name='location'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setLocation(e.currentTarget.value)}
                          >
                            <option defaultValue value=''>any</option>
                            {LOCATION.map((location, idx) => (
                              <option key={`${location}-${idx}`} value={location}>{location}</option>
                            ))}
                          </select>
                        </span>
                        <label htmlFor='location' className='block text-sm text-center font-medium text-gray-700'>Location</label>
                      </div>
                    </li>

                    <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='genre'
                            name='genre'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setGenre(e.currentTarget.value)}
                          >
                            <option value=''>any</option>
                            {GENRES.map((genre, idx) => (
                              <option key={`${genre}-${idx}`} value={genre}>{genre}</option>
                            ))}
                          </select>
                        </span>
                        <label htmlFor='genre' className='block text-sm text-center font-medium text-gray-700'>Genre</label>
                      </div>
                    </li>

                    <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='instrument'
                            name='instrument'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setInstrument(e.currentTarget.value)}
                          >
                            <option value=''>any</option>
                            {INSTRUMENTS.map((instrument, idx) => (
                              <option key={`${instrument}-${idx}`} value={instrument}>{instrument}</option>
                            ))}
                          </select>
                        </span>
                        <label htmlFor='instrument' className='block text-sm text-center font-medium text-gray-700'>Instrument</label>
                      </div>
                    </li>

                    {/* <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='vacancy'
                            name='vacancy'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setVacancy(e.currentTarget.value)}
                          >
                            <option value='null'>n/a</option>
                            <option value='false'>Not looking</option>
                            <option value='true'>Looking</option>
                          </select>
                        </span>
                        <label htmlFor='vacancy' className='block text-sm text-center font-medium text-gray-700'>Bands looking <br />for Instrument
                        </label>
                      </div>
                    </li> */}

                    <li className='px-6 py-5 relative'>
                      <div className='group flex justify-between items-center'>
                        <span className='relative z-0 inline-flex flex-col shadow-sm rounded-md'>
                          <select
                            id='instrument'
                            name='instrument'
                            className='-ml-px block w-full pl-3 pr-9 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
                            onChange={(e) => setWantedInstrument(e.currentTarget.value)}
                          >
                            <option value=''>none</option>
                            <option value='any'>Any Instrument</option>
                            {INSTRUMENTS.map((wantedInstrument, idx) => (
                              <option key={`${wantedInstrument}-${idx}`} value={wantedInstrument}>{wantedInstrument}</option>
                            ))}
                          </select>
                        </span>
                        <label htmlFor='instrument' className='block text-sm text-center font-medium text-gray-700'>Band needs</label>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    </div>

  )
}

export default SearchMobile
