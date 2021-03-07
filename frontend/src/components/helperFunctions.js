
// export const updateReadMessageStatus = ({ setUnreadStatus }) => {
//   const unread = []
//   messages.forEach(message => {
//     if (message.read === false) {
//       unread.push(message)
//       console.log('unread', unread.length)
//     }
//     if (unread.length > 0) {
//       setUnreadStatus(unread.length)
//     }
//     if (unread.length === 0) {
//       setUnreadStatus(0)
//     }
//   })
// }

export const dateStamp = (date) => {
  const newDate = new Date()
  // console.log('date', date)
  const year = newDate.getFullYear()
  const month = monthNumberToString(newDate.getMonth())
  const day = newDate.getDate()
  return month + ' ' + day + ', ' + year
}

function monthNumberToString (month) {
  if (month === 0) {
    return 'Jan'
  } else if (month === '01') {
    return 'Feb'
  } else if (month === '02') {
    return 'March'
  } else if (month === '03') {
    return 'April'
  } else if (month === '04') {
    return 'May'
  } else if (month === '05') {
    return 'Jun'
  } else if (month === '06') {
    return 'July'
  } else if (month === '07') {
    return 'Aug'
  } else if (month === '08') {
    return 'Sept'
  } else if (month === '09') {
    return 'Oct'
  } else if (month === 10) {
    return 'Nov'
  } else if (month === 11) {
    return 'Dec'
  }
}

export const formatDate = (date) => {
//   console.log('date', date)

  const year = date.slice(0, 4)
  //   console.log('year', year)

  const month = date.slice(5, 7)
  //   console.log('month', month)
  const newMonth = monthNumberToString(month)
  //   console.log('newMonth', newMonth)

  const day = date.slice(8, 10)
  //   console.log('day', day)

  return newMonth.concat(' ', day, ',', ' ', year)
//   console.log('newDate', newDate)
}
