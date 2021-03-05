
const LogoArea = () => {
  return (
    <div className='absolute inset-y-0 left-0 lg:static lg:flex-shrink-0'>
      <a href='#' className='flex items-center justify-center h-16 w-16 bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20'>
        <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white' alt='Workflow' />
      </a>
    </div>
  )
}

export default LogoArea
