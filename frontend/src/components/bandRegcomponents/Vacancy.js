
const Vacancy = ({ vacancy, setVacancy }) => {
  console.log('vacancy', vacancy)

  return (
    <div className='flex items-center'>
      <button
        type='button'
        className='bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        aria-pressed='false'
        aria-labelledby='annual-billing-label'
        onClick={() => setVacancy(vacancy => !vacancy)}
      >
        <span className='sr-only'>Use setting</span>
        {/* Enabled: "translate-x-5", Not Enabled: "translate-x-0" */}

        <span aria-hidden='true' className='translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200' />
      </button>
      <span className='ml-3' id='annual-billing-label'>
        <span className='text-sm font-medium text-gray-900'>Is your band currently looking for an instrument?</span>
      </span>
    </div>
  )
}

export default Vacancy
