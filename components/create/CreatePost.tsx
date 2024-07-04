'use client'
import { useForm } from "react-hook-form"
import FormPost from "./FormPost"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreatePostSchema } from "@/lib/zod.schema"
import { useState } from "react"

const CreatePost = () => {
    const [labels,setLabels]=useState<LabelPost[]>([])
    const [links,setLinks]=useState<LinkPost[]>([])
    const [image, setImage]=useState<string>()
    const { register, reset, handleSubmit }=useForm({
        resolver:zodResolver(CreatePostSchema),
        defaultValues:{
            title:'',
            desc:'',
        }
    })

    const onSubmit=async(values:any)=>{
      console.log(values)
      reset({
          title:'',
          desc:''
        })
    }
  return (
    <div className="flex items-center w-full px-8 mt-6">
      <FormPost labels={labels} setLabels={setLabels} links={links} setLinks={setLinks} setImage={setImage}  handleSubmit={handleSubmit} register={register}  onSubmit={onSubmit} />
    </div>
  )
}

export default CreatePost
