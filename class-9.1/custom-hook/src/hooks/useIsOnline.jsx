import { useState, useEffect } from "react";
export function useIsOnline() {
  
    const [isOnline, setisOnline] = useState(window.navigator.onLine);
  
    useEffect(()=>{
      window.addEventListener('online', ()=>setisOnline(true))
      window.addEventListener('offline', ()=>setisOnline(false))
      return ()=>{
        window.removeEventListener('online', ()=>setisOnline(true));
        window.removeEventListener('offline', ()=>setisOnline(false));
      }
    }, [])  
  
    return isOnline
  }