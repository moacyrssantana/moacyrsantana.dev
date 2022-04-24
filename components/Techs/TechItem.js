import React from 'react'

const TechItem = ({ item, css }) => {
  return (
    <a href={item.link} target='_blank' rel='noreferrer' className='mb-4'>
      <img
        className={css}
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.name}/${item.name}-${item.ext}.svg`}
      />
    </a>
  )
}

export default TechItem
