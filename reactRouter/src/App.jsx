import { useState, useCallback } from 'react'
import './App.css'

function App() {
  // const [length, setLength] = useState(8)
  // const [numbersAllowed, setNumbersAllowed] = useState(false)
  // const [charactersAllowed, setCharactersAllowed] = useState(false)
  // const [password, setPassword] = useState("")

  // const passwordGenerator = useCallback(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  //   if (numbersAllowed) str += "0123456789"
  //   if (charactersAllowed) str += "!@#$%^&*(){}-+_`~"

  //   for (i = 0; i <= length; i++) {
  //     let char = Math.floor((Math.random() * str.length) + 1)
  //     pass += str.charAt(char)
  //   }
  // }, [length, numbersAllowed, charactersAllowed, setPassword]

  // )

  return (
    <>
      <h1 className='text-4xl text-center text-white'>React Router</h1>
    </>
  )
}

export default App
