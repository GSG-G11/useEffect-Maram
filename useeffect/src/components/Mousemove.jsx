import React , {useEffect ,useState} from 'react'

export default function Mousemove() {
  const [width , setWidth] = useState({
    widthX:0,
    widthY:0,
  });
   const [backgroundColor , setBackgroundColor] = useState('')
    
   
   const backgroundColorHandler = (e) =>{
     let mouseX = e.screenX ;;
     let mouseY = e.screenY;
    if(mouseX > window.innerWidth/2){
      setBackgroundColor('blue')
    }else{
      setBackgroundColor('tomato')
    }
     setWidth({mouseX,mouseY})
   };

   useEffect (() => {
    document.addEventListener('mousemove' , backgroundColorHandler);
    return() =>{
      document.removeEventListener('mousemove' , backgroundColorHandler)
    }
   });

  return (
    <div style={{ background: backgroundColor , height:'300px' }}>
      <p> i am on  X:{width.widthX} and Y: {width.widthY}</p>
    </div>
  )
}
