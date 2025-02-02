import { NextApiRequest, NextApiResponse } from 'next'
import reposition from 'services/reposition'

const apiGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { repos, user } = await reposition('moacyrssantana')
  return res.send({
    repos,
    user
  })
}

export default apiGetUser
