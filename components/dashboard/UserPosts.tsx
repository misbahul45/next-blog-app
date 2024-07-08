'use server'
import { getAllPostsByUserId } from "@/fetch/posts"
import Post from "../Posts/Post"

interface Props{
    userId:string
}
const UserPosts = async({ userId }:Props) => {
    const data=await getAllPostsByUserId(userId)
    const posts=data.posts
  return (
    <div className="py-4 flex w-full max-w-[80%] mx-auto gap-8 flex-wrap">
      {posts.length===0?
      <p className="text-red-600 text-center text-xl">No posts yet</p>
      :
      posts?.map((post:Post)=>(
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default UserPosts
