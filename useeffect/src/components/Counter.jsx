import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // const incrementCount  =() =>{
  //   console.log('heeloo');
  //   setCount((prev) => prev + 1);
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown ', () => {
  //     incrementCount ()
  //   });
  // }, []);
  useEffect(() => {
        document.addEventListener('mousedown', () => {
          setCount((prev) => prev + 1);
        })
      }, [])
    
  return (
    <div>
      <span> {count} </span>
    </div>
  );
}
