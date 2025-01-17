import { Education, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getEducation } from 'services/education'

const EducationApi = async (
  req: NextApiRequest,
  res: NextApiResponse<Education | null>
) => {
  if (req.method === 'POST') {
    const education: Prisma.EducationCreateInput = { ...req.body }

    const savedEducation = await create(education)

    return res.send(savedEducation)
  }

  const educations = await getEducation()

  //@ts-ignore
  return res.send(educations)
}

export default EducationApi
