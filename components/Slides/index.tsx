import React from 'react'
import { Carousel } from 'flowbite-react'

import Img from 'components/Image/image'

interface Props {
  children: React.ReactNode
}

const Slides = ({ children }: Props) => {
  return (
    <div className='grid md:grid-cols-2 gap-4 h-full mx-auto w-11/12'>
      <Carousel pauseOnHover>{children}</Carousel>
    </div>
  )
}

interface PropsItem {
  img: string
  alt: string
}

const Item = ({ img, alt }: PropsItem) => {
  return (
    <Img
      src={img}
      width={500}
      height={500}
      alt={alt}
      css='rounded-xl w-full h-44 xl:h-80 2xl:h-96 object-cover'
    />
  )
}

Slides.Item = Item

export default Slides
