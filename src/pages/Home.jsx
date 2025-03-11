import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='text-center w-full h-screen grid place-content-center'>
        <h2 className='text-6xl mb-[20px]'>Home</h2>
        <p className='text-2xl mb-[20px]'>This is a Simple Blog using React Router.</p>
        <button className='bg-violet-600 text-white py-[10px] px-[20px] rounded-md' onClick={() => navigate('/posts')}>View posts list</button>
    </div>
  )
}

export default Home