import React from 'react';

const Posts = ({ posts, loading }) => {
  
  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <ul className="list-group mb-3">
      {posts.map(post => ( 
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts;