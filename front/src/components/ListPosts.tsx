import { Post } from '@/entities/Posts'
import React from 'react'

type Props = {
    posts: Array<Post>
}

const ListPosts = ({posts}: Props) => {
  return (
    posts.map((post) => {
        return (
            <div key={post.post_id}>{post.title}</div>
        )
    })
  )
}

export default ListPosts