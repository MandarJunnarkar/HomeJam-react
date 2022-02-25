import React from 'react'
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <div className="flex flex-col py-16 lg:pt-36 bg-blue-black px-2 lg:px-20 h-full w-full">
    <div className="text-white flex justify-between">
      <h1 className="font-libre-baskerville text-2xl">Reviews</h1>
      <div className='flex gap-3 items-center text-sm text-gray-300'>
      <a>1/12</a>
      <button><i className='bi bi-arrow-left'></i></button>
      <button><i className='bi bi-arrow-right'></i></button>
      </div>
    </div>
      <div className="my-10 flex justify-between overflow-x-auto gap-5 w-full pt-5 pr-5">
          <ReviewCard />
      </div>
    </div>
  )
}

export default Reviews;