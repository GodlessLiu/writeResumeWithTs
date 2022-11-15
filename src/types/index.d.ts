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
    items:itemType[],
    theme?:string
}

interface itemType {
    title: string
    header?: {
        title: string
        time?: {
            start: string
            end: string
        }
    },
    content: contentType[]
}


interface contentType {
    name?:string
    describe: string
}