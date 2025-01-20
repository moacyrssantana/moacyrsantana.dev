import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Img from 'components/Image/image'

const link = ['', 'education', 'experience', 'portifolio']
interface Props {
  children: React.ReactNode
  id?: string
}

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-dourado shadow-md z-50 transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 w-full'
          : 'relative top-8 w-11/12 mx-auto rounded-xl'
      }`}
    >
      <MenuBrand>
        {/* Menu Desktop */}
        <nav className='hidden md:flex lg:space-x-6 text-sm'>
          {link.map((item) => (
            <MenuDesktop
              key={item}
              css={
                `/${item}` === pathname
                  ? 'bg-padrao text-white'
                  : 'text-white hover:bg-padrao hover:text-white'
              }
              href={`/${item === 'home' ? '' : item}`}
              text={item === '' ? 'HOME' : item.toUpperCase()}
            />
          ))}
        </nav>

        {/* Menu Hambúrguer */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='block md:hidden text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='#fff'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </MenuBrand>
      {/* Menu Mobile */}
      {menuOpen && (
        <div className='md:hidden bg-dourado shadow-lg'>
          {link.map((item) => (
            <MenuMobile
              key={item}
              css={
                `/${item}` === pathname
                  ? 'bg-padrao text-white'
                  : 'text-white hover:bg-padrao hover:text-white'
              }
              onClick={() => setMenuOpen(!menuOpen)}
              href={`/${item === 'home' ? '' : item}`}
              text={item === '' ? 'HOME' : item.toUpperCase()}
            />
          ))}
        </div>
      )}
    </header>
  )
}

const MenuBrand = ({ children }: Props) => {
  return (
    <>
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        {/* Logo e Nome */}
        <div className='flex items-center space-x-2'>
          <Img
            src='/logo_long.png'
            alt='Logo'
            w={500}
            h={500}
            className='h-6 lg:h-10 w-full'
          />
        </div>
        {children}
      </div>
    </>
  )
}

interface PropsLink {
  href: string
  text: string
  css?: string
  onClick?: any
}

const MenuDesktop = ({ href, text, css }: PropsLink) => {
  return (
    <Link href={href} className={`${css} py-2 px-4 rounded-xl`}>
      {text}
    </Link>
  )
}

const MenuMobile = ({ href, text, css, onClick }: PropsLink) => {
  return (
    <Link href={href} onClick={onClick} className={`${css} block px-4 py-2`}>
      {text}
    </Link>
  )
}

Menu.Brand = MenuBrand
Menu.Desktop = MenuDesktop
Menu.Mobile = MenuMobile

export default Menu
