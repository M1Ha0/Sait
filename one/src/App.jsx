import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maine_page from './main_page/main_page'
import Aboute from './aboute/aboute'
import Header from './section/section'

import {Routes,Route,Link} from 'react-router-dom'
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Maine_page/>} />
        <Route path='about' element={<Aboute/>}/>
      </Routes>
    </>
  )
}
export default App
