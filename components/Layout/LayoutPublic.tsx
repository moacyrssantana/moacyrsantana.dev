import React, { useState } from 'react'
import Footer from '../Footer'
import Menu from '../Menu/Public/index'
import PageHead from '../PageHead'

interface Props {
  children: React.ReactNode
}

const LayoutPublic = ({ children }: Props) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <PageHead />
      <Menu />
      <div className='container flex-grow h-full mx-auto px-6 md:px-4'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutPublic
