import React, { useEffect, useState} from 'react'

export default function Robohash () {
  const [search , setSearch] = useState('')
  const [images , setImage] = useState([])

  const searchHandle = (e) =>{
    setSearch(e.target.value)
  }

  useEffect (() =>{
    const abortController = new AbortController();
    fetch(`https://robohash.org/${search}`,{
      signal:abortController.signal,
    })
    .then(res => res)
    .then(data => setImage(data.url))
    return() => abortController.abort()
  } ,[search])

  return (
    <div>
      <input type="text" onChange={(e) => {searchHandle(e)}} />
      {images ? <img  src={images} alt="image"/> : null}
      
      </div>
  )
}
