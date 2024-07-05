'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePostSchema } from '@/lib/zod.schema';
import { useEffect, useState } from 'react';
import FormPost from './FormPost';
import { z } from 'zod';
import { createPost } from '@/fetch/posts';

const CreatePost = () => {
    const [labels, setLabels] = useState<LabelPost[]>([]);
    const [links, setLinks] = useState<LinkPost[]>([]);
    const [image, setImage] = useState<string>('');
    const [respon, setRespon] = useState<DataRespon>();

    const { register, reset, handleSubmit } = useForm({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: '',
            desc: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof CreatePostSchema>) => {
        const newPost: Partial<Post> = {
            ...values,
            labels,
            links,
            image,
        };

        const dataRespon: DataRespon = await createPost(newPost);
        if (dataRespon.message) {
            setRespon(dataRespon);
        }
        reset({
            title: '',
            desc: '',
        });
        setImage('');
        setLabels([]);
        setLinks([]);
    };

    useEffect(() => {
        if (respon) {
            
        }
    }, [respon]);

    return (
        <div className="flex flex-col items-center w-full mt-6">
            <FormPost
                labels={labels}
                setLabels={setLabels}
                links={links}
                setLinks={setLinks}
                image={image}
                setImage={setImage}
                handleSubmit={handleSubmit}
                register={register}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default CreatePost;
