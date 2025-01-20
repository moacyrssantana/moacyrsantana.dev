import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: { id: 'clgnxfbbv0000xey0kor7hmtv' },
        update: {},
        create: {
            id: 'clgnxfbbv0000xey0kor7hmtv',
            firstName: 'Moacyr',
            lastName: 'Santana',
            email: 'moacyrssantana@gmail.com',
            password: await bcrypt.hash('030510@Santana#', 0),
            image: '/images/user/foto.jpg',
            isActive: true
        }
    })
    const information = await prisma.information.upsert({
        where: {id: 'clgnxfbbv0000xey0kor7hmtv'},
        update: {},
        create: {
            id: 'clgnxfbbv0000xey0kor7hmtv',
            phone: "+351 911 897 993",
            address: 'Rua da Liberdade, nº40 2DTO',
            city: "Seia",
            country: "Portugal",
            cep: "6270-469"
        }
    })

    const itemLevel = [
        {
            "id": "clgkowass0004xetg9njpqrty",
            "value": "1",
            "label": "Beginners",
            "description": "Academic, training only"
          },
          {
            "id": "clgkowglp0006xetg2jv4t8ui",
            "value": "2",
            "label": "Intermediate",
            "description": "Level 1 + small projects or internships"
          },
          {
            "id": "clgkowm5k0008xetguprhz7xy",
            "value": "3",
            "label": "Advanced",
            "description": "Level 1/2 + project experience"
          },
          {
            "id": "clgkowsdx000axetg18mi2sjt",
            "value": "4",
            "label": "Professional",
            "description": "Level 1/2/3 + wide professional experience"
          },
          {
            "id": "clgkowy45000cxetgzlgsbyhv",
            "value": "A1",
            "label": "Beginners",
            "description": "Most Basic Level of English"
          },
          {
            "id": "clgkox3us000exetg3rok8zqe",
            "value": "A2",
            "label": "Lower Intermediate",
            "description": "Cambridge First Level Beginners"
          },
          {
            "id": "clgkoxa64000gxetg4di0a4s6",
            "value": "B1",
            "label": "Intermediate",
            "description": "Intermediate Level"
          },
          {
            "id": "clgkoxfgo000ixetgvy4bargl",
            "value": "B2",
            "label": "Upper Intermediate",
            "description": "Second Intermediate Level"
          },
          {
            "id": "clgkoxm5q000kxetg5dfo7age",
            "value": "C1",
            "label": "Advanced",
            "description": "Advanced Level"
          },
          {
            "id": "clgkoxrnk000mxetgsvf1vfxu",
            "value": "C2",
            "label": "Business",
            "description": "Highest Level"
          },
          {
            "id": "clgkoxx9s000oxetg6vi2gq8i",
            "value": "Native",
            "label": "Native",
            "description": "Language Native"
          }
    ]

    for(let dataLevel of itemLevel) {
        await prisma.level.upsert({
            where: {id: dataLevel.id},
            update: {},
            create: {
                id: dataLevel.id,
                value: dataLevel.value,
                label: dataLevel.label,
                description: dataLevel.description
              }
        })
    }

    const itemLanguage = [
        {
            "id": "cm61a3vrv0002xee4df4rp4lz",
            "name": "Portuguese",
            "levelUnderstand": { "id": "clgkoxx9s000oxetg6vi2gq8i"},
            "levelSpeak": { "id": "clgkoxx9s000oxetg6vi2gq8i"},
            "levelWrite": { "id": "clgkoxx9s000oxetg6vi2gq8i"},
          },
          {
            "id": "cm61a3vrv0002p4lzxee4df4r",
            "name": "English",
            "levelUnderstand": { "id": "clgkowy45000cxetgzlgsbyhv"},
            "levelSpeak": { "id": "clgkowy45000cxetgzlgsbyhv"},
            "levelWrite": { "id": "clgkowy45000cxetgzlgsbyhv"}
          },
          {
            "id": "cm61a3vrv0002xee4p4lzdf4r",
            "name": "Spanish",
            "levelUnderstand": { "id": "clgkowy45000cxetgzlgsbyhv"},
            "levelSpeak": { "id": "clgkowy45000cxetgzlgsbyhv"},
            "levelWrite": { "id": "clgkowy45000cxetgzlgsbyhv"}
          }
    ]

    for(let dataLanguage of itemLanguage) {
        await prisma.language.upsert({
            where: {id: dataLanguage.id},
            update: {},
            create: {
                id: dataLanguage.id,
                name: dataLanguage.name,
                levelUnderstand: { 
                    connect: { id: dataLanguage.levelUnderstand?.id }},
                levelSpeak: {
                    connect: { id: dataLanguage.levelSpeak?.id }},
                levelWrite: {
                    connect: { id: dataLanguage.levelWrite?.id }}
              }
        })
    }
    
    const itemSkill = [
        {
            "id": "cm61a3vrv0002xee4lzdf4rp4",
            "name": "html5",
            "site": "#",
            "ext" : "original-wordmark",
            "tipo": "Front-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee4dlzf4rp4",
            "name": "css3",
            "site": "pt.wikipedia.org/wiki/CSS3",
            "ext" : "original-wordmark",
            "tipo": "Front-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee4dflz4rp4",
            "name": "javascript",
            "site": "javascript.com/",
            "ext" : "plain",
            "tipo": "Front-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee4df4lzrp4",
            "name": "react",
            "site": "reactjs.org/",
            "ext" : "original-wordmark",
            "tipo": "Front-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee4df4rlzp4",
            "name": "typescript",
            "site": "typescriptlang.org/",
            "ext" : "plain",
            "tipo": "Back-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv00024lzxee4df4rp",
            "name": "nodejs",
            "site": "nodejs.org/",
            "ext" : "original-wordmark",
            "tipo": "Back-end",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002x4lzee4df4rp",
            "name": "php",
            "site": "php.net/",
            "ext" : "plain",
            "tipo": "Back-end",
            "level": { "id": "clgkowass0004xetg9njpqrty"}
        },
        {
            "id": "cm61a3vrv0002xe4lze4df4rp",
            "name": "python",
            "site": "python.org/",
            "ext" : "original-wordmark",
            "tipo": "Back-end",
            "level": { "id": "clgkowass0004xetg9njpqrty"}
        },
        {
            "id": "cm61a3vrv0002xee4lz4df4rp",
            "name": "postgresql",
            "site": "postgresql.org/",
            "ext" : "original-wordmark",
            "tipo": "Database",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee44lzdf4rp",
            "name": "mysql",
            "site": "mysql.com/",
            "ext" : "original-wordmark",
            "tipo": "Database",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xee4d4lzf4rp",
            "name": "microsoftsqlserver",
            "site": "microsoft.com/pt-pt/sql-server",
            "ext" : "plain-wordmark",
            "tipo": "Database",
            "level": { "id": "clgkowass0004xetg9njpqrty"}
        },
        {
            "id": "cm61a3vrv0002xee4df4lz4rp",
            "name": "mongodb",
            "site": "mongodb.com/",
            "ext" : "original-wordmark",
            "tipo": "Database",
            "level": { "id": "clgkowass0004xetg9njpqrty"}
        },
        {
            "id": "cm61a3vrv0002xeep4lz4df4r",
            "name": "nestjs",
            "site": "nestjs.org/",
            "ext" : "plain-wordmark",
            "tipo": "Framework",
            "level": { "id": "clgkowass0004xetg9njpqrty"}
        },
        {
            "id": "cm61a3vrv0002xee4p4lzdf4r",
            "name": "nextjs",
            "site": "nextjs.org/",
            "ext" : "original-wordmark",
            "tipo": "Framework",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrvrp4lz0002xee4df4",
            "name": "git",
            "site": "git-scm.com/",
            "ext" : "original-wordmark",
            "tipo": "Versionamento",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        },
        {
            "id": "cm61a3vrv0002xerp4lze4df4",
            "name": "github",
            "site": "github.com",
            "ext" : "original-wordmark",
            "tipo": "Versionamento",
            "level": { "id": "clgkowglp0006xetg2jv4t8ui"}
        }
    ]

    for(let dataSkill of itemSkill) {
        await prisma.skill.upsert({
            where: {id: dataSkill.id},
            update: {},
            create: {
                id: dataSkill.id,
                name: dataSkill.name,
                site: dataSkill.site,
                ext: dataSkill.ext,
                tipo: dataSkill.tipo,
                level: {
                    connect: { id: dataSkill.level?.id }}
              }
        })
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
})