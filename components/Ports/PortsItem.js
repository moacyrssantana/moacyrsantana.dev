import React from 'react'

const PortsItem = ({ portifolio }) => {
  return (
    <div className='px-8 md:px-10 shadow-lg w-4/5 mx-auto my-8 rounded-xl'>
      <a href={portifolio.site} target='_blank' className='w-full'>
        <img src={portifolio.layout} className='w-full h-36' />
      </a>
        <h4 className='text-center mt-8 pb-6'>{portifolio.name}</h4>
    </div>
  )
}

export default PortsItem