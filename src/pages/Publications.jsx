import React from 'react'
import PublicationList from '../components/PublicationList'

function Publications() {
  return (
    <div className='px-4 container mx-auto flex flex-col gap-8 items-center mt-24'>
      {/* <h1 className='text-4xl font-bold'>Publications</h1>
      <p className='text-md text-textSecondary'>Here are some of my publications.</p> */}
      <PublicationList />
    </div>
  )
}

export default Publications
