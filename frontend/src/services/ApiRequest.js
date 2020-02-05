const APIRequest = async (who) => {
  if (who === 'google') {
       const result = await fetch('https://google.com')
       return await  result.json()
  } else {
    return 'no argument provided'
  }
}

export  {APIRequest}