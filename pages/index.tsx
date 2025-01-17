import Education from 'components/Education'
import Hero from 'components/Hero'
import Ports from 'components/Ports'
import Repos from 'components/Repos'
import Summary from 'components/Summary'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='mt-6'>
      <Hero />
      <Summary />
      <Education />
      <Repos />
      <Ports />
    </div>
  )
}

export default Home
