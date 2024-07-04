type User={
    email:string
    password:string
    id:string
}
type LabelPost={
    id:number
    name:string
}
type LinkPost={
    id:number
    link:string
}
type LebelPost ={
    id:number
    name:string
}

type Post={
    id:string,
    title:string,
    desc:string,
    labels:LebelPost[],
    links:LinkPost[],
    image:string,
    authorId:User,
}