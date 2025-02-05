import React from 'react'
import UserProfile from './UserProfile'
import { User } from '@/entities/Posts'

type Props = {
    user: User
}

const TopBar = ({user}: Props) => {
  return (
    <div className='flex flex-1 flex-col bg-red-300 min-h-22 max-h-26 p-3 '>
        <div className='bg-red-500 min-h-11 flex flex-row justify-between'>
            <div>left</div>
            <UserProfile user={user}/>
        </div>
        <div className=' flex flex-1 flex-row justify-between '>
            <div>1</div>
            <div>2</div>
            <div>3</div>

        </div>
    </div>
  )
}

export default TopBar