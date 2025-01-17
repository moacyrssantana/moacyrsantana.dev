import { useGet } from 'hooks/api'
import Link from 'next/link'

export const Languages = () => {
  const language = [
    {
      id: 'clgnxh2ax0002xey0v181v19i',
      item: 1,
      name: 'potuguese',
      understandingId: 'clgkoxx9s000oxetg6vi2gq8i',
      speakingId: 'clgkoxx9s000oxetg6vi2gq8i',
      writingId: 'clgkoxx9s000oxetg6vi2gq8i',
      levelUnderstand: {
        id: 'clgkoxx9s000oxetg6vi2gq8i',
        item: 11,
        value: 'Native',
        label: 'Native',
        description: 'Language Native'
      },
      levelSpeak: {
        id: 'clgkoxx9s000oxetg6vi2gq8i',
        item: 11,
        value: 'Native',
        label: 'Native',
        description: 'Language Native'
      },
      levelWrite: {
        id: 'clgkoxx9s000oxetg6vi2gq8i',
        item: 11,
        value: 'Native',
        label: 'Native',
        description: 'Language Native'
      }
    },
    {
      id: 'clgnxhbnf0004xey0fo5bwncb',
      item: 2,
      name: 'english',
      understandingId: 'clgkowy45000cxetgzlgsbyhv',
      speakingId: 'clgkowy45000cxetgzlgsbyhv',
      writingId: 'clgkowy45000cxetgzlgsbyhv',
      levelUnderstand: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      },
      levelSpeak: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      },
      levelWrite: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      }
    },
    {
      id: 'clgnxhkaw0005xey0e64u14iw',
      item: 3,
      name: 'spanish',
      understandingId: 'clgkowy45000cxetgzlgsbyhv',
      speakingId: 'clgkowy45000cxetgzlgsbyhv',
      writingId: 'clgkowy45000cxetgzlgsbyhv',
      levelUnderstand: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      },
      levelSpeak: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      },
      levelWrite: {
        id: 'clgkowy45000cxetgzlgsbyhv',
        item: 5,
        value: 'A1',
        label: 'Beginners',
        description: 'Most Basic Level of English'
      }
    }
  ]

  return language
}

export const Skills = () => {
  const skill = [
    {
      id: 'clgkpzq4m0004xe7cm3kcncff',
      name: 'html5',
      site: '#',
      ext: 'original-wordmark',
      tipo: 'Front-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgkq028q0006xe7ccm2axq1c',
      name: 'css3',
      site: '#',
      ext: 'original-wordmark',
      tipo: 'Front-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxiwgf0006xey0792kbjml',
      name: 'javascript',
      site: 'https://javascript.com',
      ext: 'plain',
      tipo: 'Front-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxjnav0008xey0zhefqwde',
      name: 'react',
      site: 'https://react.org',
      ext: 'original-wordmark',
      tipo: 'Front-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxkkgp000axey0m9urp5nx',
      name: 'typescript',
      site: 'https://typescriptlang.org',
      ext: 'plain',
      tipo: 'Back-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxlmwx000cxey020lqvrzt',
      name: 'nodejs',
      site: 'https://nodejs.org',
      ext: 'original-wordmark',
      tipo: 'Back-end',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxnvol000exey0yoc5p7w0',
      name: 'php',
      site: 'https://php.net',
      ext: 'plain',
      tipo: 'Back-end',
      levelId: 'clgkowass0004xetg9njpqrty',
      level: {
        id: 'clgkowass0004xetg9njpqrty',
        item: 1,
        value: '1',
        label: 'Beginners',
        description: 'Academic, training only'
      }
    },
    {
      id: 'clgnxotjk000gxey0fs2cf13j',
      name: 'python',
      site: 'https://python.org',
      ext: 'original-wordmark',
      tipo: 'Back-end',
      levelId: 'clgkowass0004xetg9njpqrty',
      level: {
        id: 'clgkowass0004xetg9njpqrty',
        item: 1,
        value: '1',
        label: 'Beginners',
        description: 'Academic, training only'
      }
    },
    {
      id: 'clgnxqb2p000ixey0faditzms',
      name: 'postgresql',
      site: 'https://postgresql.org',
      ext: 'original-wordmark',
      tipo: 'Database',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxrpmi000mxey01hp9wsdn',
      name: 'microsoftsqlserver',
      site: 'https://microsoft.com/pt-pt/sql-server',
      ext: 'plain-wordmark',
      tipo: 'Database',
      levelId: 'clgkowass0004xetg9njpqrty',
      level: {
        id: 'clgkowass0004xetg9njpqrty',
        item: 1,
        value: '1',
        label: 'Beginners',
        description: 'Academic, training only'
      }
    },
    {
      id: 'clgnxszu9000oxey0nfe0zhas',
      name: 'mongodb',
      site: 'https://mongodb.com',
      ext: 'original-wordmark',
      tipo: 'Database',
      levelId: 'clgkowass0004xetg9njpqrty',
      level: {
        id: 'clgkowass0004xetg9njpqrty',
        item: 1,
        value: '1',
        label: 'Beginners',
        description: 'Academic, training only'
      }
    },
    {
      id: 'clgnxtqci000qxey0xnk4iadu',
      name: 'nestjs',
      site: 'https://nestjs.org',
      ext: 'plain-wordmark',
      tipo: 'Framework',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxueh0000sxey0409zuso5',
      name: 'nextjs',
      site: 'https://nextjs.org',
      ext: 'original-wordmark',
      tipo: 'Framework',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxvc3d000uxey0cm4xnbb2',
      name: 'git',
      site: 'https://git-scm.com',
      ext: 'original-wordmark',
      tipo: 'Versionamento',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxw0p9000wxey0hjgzybne',
      name: 'github',
      site: 'https://github.com',
      ext: 'original-wordmark',
      tipo: 'Versionamento',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    },
    {
      id: 'clgnxqv4a000kxey06f0lnmr3',
      name: 'mysql',
      site: 'https://mysql.com',
      ext: 'original-wordmark',
      tipo: 'Database',
      levelId: 'clgkowglp0006xetg2jv4t8ui',
      level: {
        id: 'clgkowglp0006xetg2jv4t8ui',
        item: 2,
        value: '2',
        label: 'Intermediate',
        description: 'Level 1 + small projects or internships'
      }
    }
  ]

  return skill
}

export const Educations = () => {
  const education = [
    {
      id: 'clgnxxu8a000yxey0mspg95kc',
      tipo: 'Profissionalizante',
      institution: 'Devpleno',
      site: 'go.devpleno.com/fsm',
      degree: 'Improvement Course',
      subject: 'Fullstack Maste',
      courseload: 300,
      begin: '2020-01-10T00:00:00.000Z',
      end: null
    },
    {
      id: 'clgnxze1r0010xey0s12ty8a1',
      tipo: 'Graduacao',
      institution: 'UNIFACS - Universidade Salvador',
      site: 'unifacs.br/graduacao/ciencia-da-computacao',
      degree: 'Graduation`s Degree',
      subject: 'Bachelor of Computer Science',
      courseload: null,
      begin: '2010-01-10T00:00:00.000Z',
      end: '2014-06-29T23:00:00.000Z'
    },
    {
      id: 'clgny0zuy0012xey00by5of4e',
      tipo: 'Graduacao',
      institution: 'State College Yeda Barradas Carneiro',
      site: 'escolas.educacao.ba.gov.br/node/12211',
      degree: 'High School',
      subject: 'High School',
      courseload: null,
      begin: '2001-01-10T00:00:00.000Z',
      end: '2003-11-30T00:00:00.000Z'
    }
  ]

  return education
}

export const Experiences = () => {
  const experience = [
    {
      id: 'clgny2ont0014xey0a2lj163j',
      role: 'Teacher of Technical Course',
      tipo: 'Onsite',
      company: 'Department of Education of the State of Bahia',
      city: 'Feira de Santana - Bahia',
      country: 'Brazil',
      description:
        'Teach classes on computer networks, databases, statistics, analysis and projects of systems',
      begin: '2016-01-26T00:00:00.000Z',
      end: '2020-01-23T00:00:00.000Z'
    },
    {
      id: 'clgny5lwa0016xey0e56uq6st',
      role: 'Junior Systems Analyst',
      tipo: 'Onsite',
      company: 'SEMGE - Municipal Department of Management',
      city: 'Salvador - Bahia',
      country: 'Brazil',
      description:
        'Systems and database analyst. Responsible for maintaining and implementing new features in the database SQL Server data.',
      begin: '2013-06-03T00:00:00.000Z',
      end: '2014-07-30T00:00:00.000Z'
    },
    {
      id: 'clgny7h8x0018xey0g06ptzq6',
      role: 'Systems Analyst',
      tipo: 'Onsite',
      company: 'Excelta Systems',
      city: 'Salvador - Bahia',
      country: 'Brazil',
      description:
        'Software analysis and development. Temporary contract for software development on the .NET and SQL platform.',
      begin: '2012-07-01T00:00:00.000Z',
      end: '2012-11-29T00:00:00.000Z'
    }
  ]

  return experience
}

export const Portifolios = () => {
  const portifolio = [
    {
      id: 'clgkq1hm70008xe7cvfrnguym',
      layout: '/images/portifolio/moacyrsantana.dev.png',
      name: 'Moacyr Santana Resume',
      site: 'https://moacyrsantana.vercel.app/',
      category: 'amador',
      description:
        'This website was built during Fullstack Master classes. We used NextJS + SSR (Server Side Rendering) + Vercel (as platform) You can find the source-code of this website at:https://github.com/juniorvilasboas/moacyrsantana.dev',
      skills: [
        {
          id: 'clgkpzq4m0004xe7cm3kcncff',
          name: 'html5',
          site: '#',
          ext: 'original-wordmark',
          tipo: 'Front-end',
          levelId: 'clgkowglp0006xetg2jv4t8ui',
          level: {
            id: 'clgkowglp0006xetg2jv4t8ui',
            item: 2,
            value: '2',
            label: 'Intermediate',
            description: 'Level 1 + small projects or internships'
          }
        },
        {
          id: 'clgkq028q0006xe7ccm2axq1c',
          name: 'css3',
          site: '#',
          ext: 'original-wordmark',
          tipo: 'Front-end',
          levelId: 'clgkowglp0006xetg2jv4t8ui',
          level: {
            id: 'clgkowglp0006xetg2jv4t8ui',
            item: 2,
            value: '2',
            label: 'Intermediate',
            description: 'Level 1 + small projects or internships'
          }
        }
      ]
    } /*,
    {
      id: 'clgkq1hm70008xe7cguymvfrn',
      layout: '/images/portifolio/asfsan.png',
      name: 'ASFSAN',
      site: 'https://moacyrsantana.vercel.app/',
      category: 'profissional',
      description:
        'This website was built during Fullstack Master classes. We used NextJS + SSR (Server Side Rendering) + Vercel (as platform) You can find the source-code of this website at:https://github.com/juniorvilasboas/moacyrsantana.dev',
      skills: [
        {
          id: 'clgkpzq4m0004xe7cm3kcncff',
          name: 'html5',
          site: '#',
          ext: 'original-wordmark',
          tipo: 'Front-end',
          levelId: 'clgkowglp0006xetg2jv4t8ui',
          level: {
            id: 'clgkowglp0006xetg2jv4t8ui',
            item: 2,
            value: '2',
            label: 'Intermediate',
            description: 'Level 1 + small projects or internships'
          }
        },
        {
          id: 'clgkq028q0006xe7ccm2axq1c',
          name: 'css3',
          site: '#',
          ext: 'original-wordmark',
          tipo: 'Front-end',
          levelId: 'clgkowglp0006xetg2jv4t8ui',
          level: {
            id: 'clgkowglp0006xetg2jv4t8ui',
            item: 2,
            value: '2',
            label: 'Intermediate',
            description: 'Level 1 + small projects or internships'
          }
        }
      ]
    }*/
  ]

  return portifolio
}
