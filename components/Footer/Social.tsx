import Link from 'next/link'

const Social = () => {
  return (
    <div className='flex items-center justify-center text-center pb-4 md:pb-6'>
      <Link
        href='https://www.facebook.com/moacyrssantana/'
        target='_blank'
        rel='noreferrer'
        className='text-2xl md:text-3xl text-inherit w-8 h-8 md:w-10 md:h-10 leading-10 flex flex-row items-center justify-center inline-block border rounded-3xl mx-2 opacity-75 hover:text-blue-500'
      >
        <i className='ion-social-facebook'></i>
      </Link>
      <Link
        href='https://www.instagram.com/moacyrssantana/'
        target='_blank'
        rel='noreferrer'
        className='text-2xl md:text-3xl text-inherit w-8 h-8 md:w-10 md:h-10 leading-10 flex flex-row items-center justify-center inline-block border rounded-3xl mx-2 opacity-75 hover:text-orange-600'
      >
        <i className='ion-social-instagram'></i>
      </Link>
      <Link
        href='https://twitter.com/moacyrssantana'
        target='_blank'
        rel='noreferrer'
        className='text-2xl md:text-3xl text-inherit w-8 h-8 md:w-10 md:h-10 leading-10 flex flex-row items-center justify-center inline-block border rounded-3xl mx-2 opacity-75 hover:text-blue-400'
      >
        <i className='ion-social-twitter'></i>
      </Link>
    </div>
  )
}

export default Social
