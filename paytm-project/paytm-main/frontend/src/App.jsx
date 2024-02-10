import {BrowserRouter, Route, Routes} from 'react-router-dom' 

import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import {Dashboard} from './pages/Dashboard';
import {Send} from './pages/Send';

function App() {
  // Main routes
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/send' element={<Send />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
