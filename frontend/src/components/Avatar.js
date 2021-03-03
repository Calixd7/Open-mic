import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useEffect, useState} from 'react'
// import {getUserProfile} from '../api'

const Avatar = ({image}) => {
    

    
    
    // useEffect(() => {
    //     getUserProfile(token).then(profile => {
    //         console.log('profile', profile.length)
    //         if (!profile) {
    //           return 'loading'
    //       }
          
    //         if (profile.length > 0) {
    //         if (profile.image) {
    //             console.log('profile before avatar', profile)
    //             setAvatar(profile.image)
    //         }
    //       }
    //     })
    //   }, [isImage])

      console.log('image in Avatar', image)
    //   console.log('avatar', avatar)

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
