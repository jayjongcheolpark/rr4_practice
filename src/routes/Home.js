import React from 'react'

const Home = ({history}) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {history.push('/posts')}}>
        Go to Posts 
      </button>
    </div>
  )
}

export default Home 