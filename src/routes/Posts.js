import React from 'react'
import { Route, Link } from 'react-router-dom'

const Post = ({match}) => {
  return (
    <h2>
      {match.params.title}
    </h2>
  )
}

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to="/posts/react">React</Link>
      <Link to="/posts/angular">Angular</Link>
      <Link to="/posts/vue">Vue</Link>
      <Route
        path="/posts/:title"
        component={Post}
      />
    </div>
  )
}

export default Posts  