import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const PostDetails = () => {
  const postData = useLoaderData()
  const navigate = useNavigate()

  return (
    <div className='w-[60%] h-screen grid place-content-center'>
      <h2 className="text-3xl font-medium mb-[20px]">Post Details</h2>
      <h4><span className='text-violet-600'>Title:</span> {postData.title}</h4>
      <p><span className='text-violet-600'>Body:</span> {postData.body}</p>
      <button className='mt-[20px] bg-violet-600 text-white py-[10px] px-[20px] rounded-md' onClick={() => navigate('/')}>Go to home page</button>
    </div>
  )
}

export default PostDetails

export const postDetailsLoader = async ({ params }) => {
  const { id } = params
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
  const data = response.json()
  return data
}