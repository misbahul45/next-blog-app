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
    postId:string
}
type LabelPost ={
    id:string
    name:string
    postId:string
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
    labels:LebelPost[],
    links:LinkPost[],
    image:string,
    authorId:string,
}