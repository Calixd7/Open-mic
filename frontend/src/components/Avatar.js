import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Avatar = ({image}) => {
    
  return (
    <div>
      <span className='sr-only'>Open User Menu></span>
                {image
              ? <img
              className='block h-12 w-auto rounded-full'
              src={image}
              alt='avatar'
            />
            : <span>
              <FontAwesomeIcon
                icon={['far', 'user']}
                className='text-red-300 hover:text-red-500 text-lg mb-1'
              />
            </span>
            }
    </div>
  )
}

export default Avatar
