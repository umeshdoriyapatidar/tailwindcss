// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import './index.css'
function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    name: "Umesh"
  }
  let newArr = [2,5,6]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel="Chai aur code" newObj = {myObj} myArry = {newArr} />
      <Card/>
    </>
  )
}

export default App
