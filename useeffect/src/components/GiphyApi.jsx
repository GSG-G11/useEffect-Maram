import React , {useEffect , useState} from 'react'

export default function GiphyApi() {
  const [search , setSearch] = useState('');
  const [images ,setImages] = useState([]);

const searchHandle = (e) =>{
 setSearch(e.target.value)
}
useEffect (() =>{
  const abortController = new AbortController();
  fetch(`https://api.giphy.com/v1/stickers/search?q=${search}&api_key=sH9Xt5hxowsJmO4IKT0j6Tkn18sabS9i` , {
    signal: abortController.signal,
  })
  .then(res => res.json())
  .then(data => {
    setImages(data.data)
  }).catch((err) => console.log(err))
  return () =>{
    abortController.abort();
  }

},[search]);


  return (
    <div>
      <h1>GiphyApi </h1>
      <input type="search" onChange={(e) => searchHandle(e)} />
       {
         images.map((ele) =>{
           return <img src={ele.images.original.url} alt="image"/>
         })
       }
    </div>
  )
}
