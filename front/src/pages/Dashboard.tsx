import Topbar from '@/components/Topbar'
import React from 'react'

type Props = {}

const Dashboard = () => {
  return (
    <div className='flex flex-1 flex-row min-h-screen'>
        <div className='min-w-[220px] bg-slate-400'>Sidepanel</div>
        <div className='flex-1 flex-col'>
            <Topbar/>
            <div>Content dashboard</div>
        </div>
    </div>
  )
}

export default Dashboard