import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import './App.css'
import { nicknameState } from './store/user'

function App() {
  const [value, setInputValue] = useState('')
  const setNickname = useSetRecoilState(nicknameState)
  const navigate = useNavigate()
  const go = () => {
    setNickname(value)
    navigate('/profile')
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='flex'>
        <input
         type="text"
         className='flex-1 outline-none border-none rounded-4px bg-hex-eee py-6px px-6px text-18px'
         placeholder="input your name"
         value={value}
         onChange={e => setInputValue(e.target.value)}
         maxLength={24}
          />
        <button className='ml-12px w-74px' onClick={go}>Go</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
