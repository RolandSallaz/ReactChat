import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import AuthForm from "../AuthForm/AuthForm";

function App() {

  return (
    <main className='main'>
      <AuthForm/>
    </main>
  )
}

export default App
