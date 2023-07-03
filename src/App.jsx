import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/component/Navbar'
import Body1 from './assets/component/Body1'
import Your from './assets/component/Your'
import Card from './assets/component/Card'
import Adewale from './assets/component/Adewale'
import Million from './assets/component/Million'
import Featured from './assets/component/Featured'
import Footer from './assets/component/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Body1 />
  <Your />
  <Card />
  <Adewale />
  <Million />
  <Featured />
  <Footer />
   
  
    </>
  )
}

export default App
