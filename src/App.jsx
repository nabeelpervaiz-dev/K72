
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'

function App() {
  

  return (
    <>
    <Routes>
        <Route path='/'  element={<Home/>}/>
         <Route path='/Projects'   element={<Projects/>}/>
          <Route path='/Agence'   element={<Agence/>}/>
    </Routes>
         
    </>
  )
}

export default App
