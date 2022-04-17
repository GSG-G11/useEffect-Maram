import React , {useEffect , useState} from 'react'

export default function RandomUser() {

  const [userInfo , setUserInfo] = useState('')

  // console.log(userInfo.address.street)

  useEffect (() =>{
    const abortController= new AbortController();
   fetch('https://jsonplaceholder.typicode.com/users' , {
     signal: abortController.signal,
   })
   .then(res=> res.json())
   .then(data =>setUserInfo(data[0]) )

   return() =>abortController.abort();
  }, []);
  return (
    <div>
     <h2> Name {userInfo.name} </h2>
     <span> UserName: {userInfo.username}</span>
     <p> Email : {userInfo.email} </p>
   
     {/* <p> Address : {userInfo.address} </p> */}
     
    </div>
  )
}
