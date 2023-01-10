export const submitData = async (data: string) => {

  const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
  })


    if (res.status === 200){
      console.log(res.status)
      return true
    }
    else{
      console.log(res.status)
      return false
    }
}