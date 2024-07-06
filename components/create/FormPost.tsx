import React, { useState } from 'react'
import Input from '../auth/Input'
import Label from './Label'
import LinkPost from './LinkPost'
import Button from '../auth/Button'
import ImageThumbanail from './ImageThumbanail'

interface Props {
    register:Function,
    onSubmit: (values: any) => void; 
    handleSubmit:Function,
    labels:LabelPost[],
    links:LinkPost[],
    image:string,
    setLabels:Function,
    setLinks:Function,
    setImage:Function,
    loading:boolean,
  }

const FormPost = ({ labels,setLabels,links,setLinks,image,setImage,handleSubmit,register, loading,onSubmit }:Props) => {
    const [labelValue,setLabelValue]=useState<string>('')
    const [linkValue,setLinkValue]=useState<string>('')

    const onChangeLabel=(e:React.FormEvent<HTMLInputElement>)=>{
        setLabelValue(e.currentTarget.value)
    }
    const onChangeLink=(e:React.FormEvent<HTMLInputElement>)=>{
        setLinkValue(e.currentTarget.value)
    }

    const handleAddLabel=()=>{
        if(labelValue.trim().length===0) return;

        setLabels((prev:LabelPost[])=>[...prev,{
            name:labelValue
        }])
        setLabelValue('')
    }
    const handleAddLink=()=>{
        if(linkValue.trim().length===0 || !linkValue.trim().includes('http')) {
            setLinkValue('')
            return;
        }
        setLinks((prev:LinkPost[])=>[...prev,{link:linkValue}])
        setLinkValue('')
    }

  return (
    <>
        <ImageThumbanail image={image} setImage={setImage} />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[70%] mx-auto">
            <Input register={register} type='text' placeholder='Title' name='title' id='title'  />
            <div className='flex gap-4 items-center justify-center'>
                <input value={labelValue} onChange={onChangeLabel} type="text" placeholder='Label' name='label' id='label' className='flex-1 py-2 pl-4 shadow-md shadow-slate-500 outline-none focus:ring-2 focus:ring-blue-700 rounded' />
                <button onClick={handleAddLabel} type='button' className='px-4 py-2 bg-red-600 text-slate-100 hover:bg-red-800 rounded-md shadow-md shadow-slate-500 font-semibold'>Add</button>
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
                {labels.length==0?
                <p className='text-red-500 font-semibold text-lg opacity-85'>*No labels for this post</p>
                :
                labels.map((label)=>(
                    <Label key={label.name} id={label.name} name={label.name} setLabels={setLabels} />
                ))
                }
            </div>    
            <div className='mt-6 flex gap-4 items-center justify-center'>
                <input value={linkValue} onChange={onChangeLink} type="text" placeholder='Link' name='link' id='link' className='flex-1 py-2 pl-4 shadow-md shadow-slate-500 outline-none focus:ring-2 focus:ring-blue-700 rounded' />
                <button onClick={handleAddLink} type='button' className='px-4 py-2 bg-blue-600 text-slate-100 hover:bg-blue-800 rounded-md shadow-md shadow-slate-500 font-semibold'>Link</button>
            </div>
            <div className="mt-6 flex gap-2 flex-wrap">
                {links.length==0?
                <p className='text-green-500 font-semibold text-lg opacity-85'>*No links for this post</p>
                :
                links.map((link)=>(
                    <LinkPost key={link.link} id={link.link} link={link.link} setLinks={setLinks} />
                ))
                }
            </div>
            <textarea {...register('desc')}  name="desc" id="desc" title='desc' placeholder='Description' className='w-full h-[70vh] outline-none px-4 py-3 rounded focus:ring-2 focus:ring-blue-700 mt-6 resize-none shadow-md shadow-slate-500'></textarea>
            <Button type='submit' text={loading?'Posting...':'Publish'} bgColor={`${loading?"bg-blue-600":"bg-red-600"} font-semibold block ml-auto mt-4 w-48 text-center py-2 text-slate-100 shadow-md shadow-slate-500 rounded-md hover:bg-red-700 hover:scale-105 transition-all duration-75`} />
        </form>
     </>
  )
}

export default FormPost
