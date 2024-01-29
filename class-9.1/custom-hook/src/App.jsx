import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';


function App() {
  
  const isOnline = useIsOnline();

  if(isOnline) {
    return "You are online"
  }
  return "You are offline, please connect to the internet"
}


export default App