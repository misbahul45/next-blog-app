'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreatePostSchema } from "@/lib/zod.schema"
import { useState } from "react"
import FormPost from "./FormPost"
import { z } from "zod"

const CreatePost = () => {
    const [labels,setLabels]=useState<LabelPost[]>([])
    const [links,setLinks]=useState<LinkPost[]>([])
    const [image, setImage]=useState<string>('')

    const { register, reset, handleSubmit }=useForm({
        resolver:zodResolver(CreatePostSchema),
        defaultValues:{
            title:'',
            desc:'',
        }
    })

    const onSubmit=async(values:z.infer<typeof CreatePostSchema>)=>{
        const post:Post={
          ...values,
          labels,
          links,
          image:image || "",
        }
      reset({
          title:'',
          desc:''
        })
    }
  return (
    <div className="flex flex-col items-center w-full mt-6">
        <FormPost
        labels={labels}
        setLabels={setLabels}
        links={links} setLinks={setLinks}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
        register={register}
        onSubmit={onSubmit} />
    </div>
  )
}

export default CreatePost
