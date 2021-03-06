
const MessageList = () => {
  return (
    // <aside className='hidden xl:block xl:flex-shrink-0 xl:order-first'>
    <aside className='hidden'>
      <div className='h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100'>
        <div className='flex-shrink-0'>
          <div className='h-16 bg-white px-6 flex flex-col justify-center'>
            <div className='flex items-baseline space-x-3'>
              <h2 className='text-ls font-medium text-gray-900'>Inbox</h2>
              <p className='text-sm font-medium text-gray-500'>12 messages</p>
            </div>
          </div>
          <div className='border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500'>
            Sorted by date
          </div>
        </div>
        <nav aria-label='Message list' className='min-h-0 flex-1 overflow-y-auto'>
          <ul className='border-b border-gray-200 divide-y divide-gray-200'>
            <li className='relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600'>
              <div className='flex justify-between space-x-3'>
                <div className='min-w-0 flex-1'>
                  <a href='#' className='block focus:outline-none'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    <p className='text-sm font-medium text-gray-900 truncate'>Gloria Roberston</p>
                    <p className='text-sm text-gray-500 truncate'>Velit placeat sit ducimus non sed</p>
                  </a>
                </div>
                <time dateTime='2021-01-27T16:35' className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'>1d ago</time>
              </div>
              <div className='mt-1'>
                <p className='line-clamp-2 text-sm text-gray-600'>
                  Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                </p>
              </div>
            </li>

            <li className='relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600'>
              <div className='flex justify-between space-x-3'>
                <div className='min-w-0 flex-1'>
                  <a href='#' className='block focus:outline-none'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    <p className='text-sm font-medium text-gray-900 truncate'>Virginia Abshire</p>
                    <p className='text-sm text-gray-500 truncate'>Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil</p>
                  </a>
                </div>
                <time dateTime='2021-01-27T16:35' className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'>1d ago</time>
              </div>
              <div className='mt-1'>
                <p className='line-clamp-2 text-sm text-gray-600'>
                  Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default MessageList
