
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

export const dateStamp = async (date) => {
  const month = await monthNumberToString(date.getMonth())
  const year = date.getFullYear()
  const day = date.getDate()
  return month + ' ' + day + ', ' + year
}

function monthNumberToString (month) {
  console.log('month in String', month)
  if (month === 0) {
    return 'Jan'
  } else if (month === 1) {
    return 'Feb'
  } else if (month === 2) {
    return 'March'
  } else if (month === 3) {
    return 'April'
  } else if (month === 4) {
    return 'May'
  } else if (month === 5) {
    return 'Jun'
  } else if (month === 6) {
    return 'July'
  } else if (month === 7) {
    return 'Aug'
  } else if (month === 8) {
    return 'Sept'
  } else if (month === 9) {
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
