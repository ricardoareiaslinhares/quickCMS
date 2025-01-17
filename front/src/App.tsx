import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { appFB, firebaseConfig } from './framework/firebase.config'
import { getAuth } from 'firebase/auth'
import LoginPage from './pages/LoginPage'
export const auth = getAuth(appFB);


function App() {


  const [count, setCount] = useState(0)
  console.log("HI")
  console.log(import.meta.env.VITE_FB_projectId);
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR ou nao 
        </p>
      </div>
      <LoginPage />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
