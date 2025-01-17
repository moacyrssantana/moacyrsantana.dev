import Link from 'next/link'
import Social from './Social'
import Img from 'components/Image/image'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-dourado mt-10 border-t-2 drop-shadow-[0_10px_3px_rgba(0,0,0,0.25)]'>
      <footer>
        <div className='flex justify-center mx-auto text-black my-8 w-11/12 md:w-3/5'>
          <div className='flex mt-4 mr-12 md:mr-20'>
            <Img src={'/logo_long.png'} w={500} h={500} css={'w-72 m-auto'} />
          </div>
          <div className='p-2 md:p-4'>
            <p>Siga-nos</p>
            <ul className='flex mt-6 space-x-4'>
              <Social />
            </ul>
          </div>
        </div>
        <Link href={'https://moacyrsantana.vercel.app/'} target='_blank'>
          <p className='text-center text-sm'>MAP Studio © 2020 - {year}</p>
        </Link>
      </footer>
    </div>
  )
}

export default Footer
