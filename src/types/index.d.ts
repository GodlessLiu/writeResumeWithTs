interface temp1Type {
    name: string
    identity: string
    headerLogo:string
    contactMe: {
        phone: number
        email: string
        where: string
    },
    age: number
    JobHuntingIntention: string,
    items:temp1itemType[],
    theme?:string
}

interface temp1itemType {
    title: string
    header?: {
        title: string
        time?: {
            start: string
            end: string
        }
    },
    content: temp1contentType[]
}


interface temp1contentType {
    name?:string
    describe: string
}

// ------------------------------------------------------------------------------------------------

interface temp2Type {
    name:string
    JobHuntingIntention:string
    contactMe: {
        phone: number
        email: string
        school: string
    },
    jobBackgrounds:temp2jobBackground[],
    skills:string[]
    projectBackgrounds:temp2projectBackground[]
    selfIntroduction: string[],
    theme:string


}


interface temp2jobBackground{
    name:string
    time:{
        start: string
        end: string
    }
    department: string // 部门
    position: string // 职位
    duty:string[]
}


interface temp2projectBackground{
    name:string
    describe:string
    technology:string[]
    content:string[] // 工作内容
}