import { User } from '@/entities/Posts'
import React from 'react'

type Props = {
    user: User
}

const UserProfile = ({user}: Props) => {
  return (
    <div>User {user.name}</div>
  )
}

export default UserProfile