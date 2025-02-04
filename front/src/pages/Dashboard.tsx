import TopBar from '@/components/TopBar'
import { User } from '@/entities/Posts'
import React from 'react'
import { fakeUser } from '../utils/fakeData'

type Props = {}


const Dashboard = () => {
    const fakeUserData:User = fakeUser

  return (
    <div className='flex flex-1 flex-row min-h-screen'>
        <div className='min-w-[220px] bg-slate-400'>Sidepanel</div>
        <div className='flex-1 flex-col'>
            <TopBar user={fakeUserData}/>
            <div>Content dashboard</div>
        </div>
    </div>
  )
}

export default Dashboard