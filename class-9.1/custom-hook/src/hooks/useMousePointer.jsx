import { useState, useEffect } from "react";

export function useMousePointer() {
  
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    function handleMouseMove(e) {
        setXPos(e.clientX);
        setYPos(e.clientY);
    }

    useEffect(()=>{
      window.addEventListener('mousemove', handleMouseMove);
    }, [])  
  
    return {xPos, yPos}
  }