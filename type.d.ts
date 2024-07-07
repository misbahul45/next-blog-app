type User={
    userImage:string
    username:string
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

type CommentPost={
    id:string
    text:string
    postId:string | any
    userId:string | any
}

type Post={
    id:string,
    title:string,
    desc:string,
    slug:string,
    labels:LabelPost[],
    links:LinkPost[],
    comments:CommentPost[],
    image:string,
    authorId:string,
    UpdatedAt:Date
}
