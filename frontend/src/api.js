// this is where we have every single API request - each API request will be its own function.

import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://team-open-mic.herokuapp.com/'
})

export function registration (username, password) {
  return apiUrl
    .post('auth/users/', {
      username: username,
      password: password
    })
    .then(result => {
      return login(username, password)
    })
    .catch(error => {
      let errors = []
      if (error.response) {
        const data = error.response.data
        if (data.username) {
          errors = errors.concat(data.username)
        }
        if (data.password) {
          errors = errors.concat(data.password)
        }
      }

      if (errors.length === 0) {
        errors.push('There was a problem registering.')
      }
      const err = new Error(errors[0])
      throw err
    })
}

export function login (username, password) {
  return apiUrl
    .post('auth/token/login/', {
      username: username,
      password: password
    })
    .then(results => results.data)
    .catch(error => {
      console.log({ error })
      if (error.response) {
        if (error.response.data.non_field_errors) {
          throw new Error(error.response.data.non_field_errors.join(' '))
        }
      }
      throw new Error('Something went wrong.')
    })
}

export function getProfiles (token) {
  return apiUrl
    .get('api/userprofiles/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(results => results.data)
}

// ************************************************
// ******* POST for data WITHOUT formData *********
// ************************************************

export function postProfiles (token, type) {
  return apiUrl.post('api/userprofiles/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      console.log('api data', res.data)
      return res.data
    })
}

// ************************************************
// ******* POST for data WITH formData *********
// ************************************************
// export function postProfiles (token, data) {
//   return apiUrl.post('api/userprofiles/', data, {
//     headers: {
//       'content-type': 'multipart/form-data',
//       Authorization: `Token ${token}`
//     }
//   })
//     .then(res => {
//       console.log('api data', res.data)
//       return res.data
//     })
// }

export function getProfile (token, pk) {
  return apiUrl.get(`api/userprofiles/${pk}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function deleteProfile (token, pk) {
  return apiUrl
    .delete(`users/${pk}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => res.data)
}

export function updateProfile (token, pk) {
  return apiUrl
    .put(`api/userprofiles/${pk}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => console.log('res.data api', res.data))
}
