import React from 'react'
import { useSelector } from 'react-redux'

export default function PostItem() {
    const post = useSelector(state => state.post);
  return (
    <div>
        {post.loading && <div> Loading ... </div> }
        {!post.loading && post.error ? <div> Error :{post.error} </div> : null}
        {
            !post.loading && post.post ? (
                <div>
                    <h2>{post.post.title}</h2>
                    <p>{post.post.body}</p>
                </div>
            ) : null
        }
    </div>
  )
}
