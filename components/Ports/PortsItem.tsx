import Img from 'components/Image/image'
import Link from 'next/link'

const PortsItem = ({ portifolio }: any) => {
  return (
    <Link href={portifolio.site} target='_blank'>
      <div className='flex sm:mx-2 mb-4 sm:mb-8 w-full sm:w-80 h-60'>
        <div>
          <Img
            alt='border-left'
            src='/images/side_shadowleft.jpg'
            width={500}
            height={500}
            className='w-full h-full'
          />
        </div>
        <div className='rounded-xl border text-center items-center p-4 w-full h-full'>
          <Img
            alt={portifolio.name}
            src={portifolio.layout}
            width={500}
            height={500}
            className='rounded-lg mb-8 w-full h-36 mx-auto'
          />
          <p className='text-xl text-verde font-bold'>{portifolio.name}</p>
        </div>
        <div>
          <Img
            alt='border-left'
            src='/images/side_shadowright.jpg'
            width={500}
            height={500}
            className='w-full h-full'
          />
        </div>
      </div>
      {/*<div className='border px-8 md:px-2 lg:px-10 shadow-lg w-72 sm:w-2/3 md:w-3/4 lg:w-3/4 mx-auto my-8 rounded-xl'>
          <Link
            href={portifolio.site}
            target='_blank'
            rel='noreferrer'
            className='w-full'
          >
            <Img
              alt={portifolio.name}
              src={portifolio.layout}
              w={500}
              h={500}
              className='w-full h-36'
            />
          </Link>
          <h4 className='text-center mt-8 pb-6'>{portifolio.name}</h4>
        </div>*/}
    </Link>
  )
}

export default PortsItem
