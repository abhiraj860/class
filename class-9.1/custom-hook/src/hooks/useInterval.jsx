import { useState, useEffect } from "react";

export function useInterval(fn, n) {
  
    useEffect(()=>{
        const time = setInterval(fn, n);
        return ()=>{
            clearInterval(time);
        }
    }, [fn, n])    
  
    return null
  }