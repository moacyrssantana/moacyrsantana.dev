import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const Portifolio = ({ ports }) => {
  return (
    <div>
      <h3 className=' text-dourado text-2xl font-bold text-center uppercase mt-16 mb-8'>
        My Portifolio
      </h3>
      <div className='md:grid md:grid-cols-2 mx-auto'>
        {ports.map((port) => (
          <div className='flex bg-white dark:bg-gray-800 rounded-lg shadow-xl divide-x md:mr-6 mb-4'>
            <div className='flex-none w-24 md:w-48 relative'>
              <div className='py-6 px-2 w-24 md:w-48 text-right text-sm md:text-lg font-bold'>
                <img
                  src={port.layout}
                  alt='shopping image'
                  className='absolute rounded-lg inset-0 w-full object-cover my-auto'
                />
              </div>
            </div>
            <div className='flex-auto py-4 px-4'>
              <div className='flex flex-wrap'>
                <h1 className='text-dourado text-sm md:text-lg uppercase font-bold flex-auto dark:text-gray-50'>
                  {port.name}
                </h1>
              </div>
              <div className='flex items-baseline mt-4 mb-2 text-gray-700 dark:text-gray-300'>
                <p className='text-base md:text-xl uppercase mb-4'>
                  Techs <br />
                </p>
              </div>
              <div className='flex'>
                <Link href={port.site}>
                  <a className='text-dourado hover:underline' target='_blank'>
                    Web Site
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const portRequest = await fetch(process.env.API_URL + '/portifolio')
  const { ports } = await portRequest.json()
  console.log(ports)
  return {
    props: {
      ports
    }
  }
}

export default Portifolio
