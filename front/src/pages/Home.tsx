import LoginPage from '@/components/LoginPage'
import React from 'react'

type Props = {
      setloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({setloggedIn}: Props) => {
  return (
    <div>
        <LoginPage setloggedIn={setloggedIn}/>
    </div>
  )
}

export default Home