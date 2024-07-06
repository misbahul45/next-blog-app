type User={
    email:string
    password:string
    id:string
}

type DataRespon={
    message:string,
    success:boolean
}

type LinkPost={
    id:string
    link:string
    postId:any
}
type LabelPost ={
    id:string
    name:string
    postId:any
}

type Comment={
    id:string
    text:string
    postId:string
}

type Post={
    id:string,
    title:string,
    desc:string,
    labels:LabelPost[],
    links:LinkPost[],
    image:string,
    authorId:string,
}