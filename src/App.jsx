import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVehicle from './components/AddVehicle'
import ViewBookings from './components/ViewBookings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddVehicle/>
     <ViewBookings/>
     
    </>
  )
}

export default App
