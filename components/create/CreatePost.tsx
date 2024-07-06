'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreatePostSchema } from '@/lib/zod.schema';
import { useEffect, useState } from 'react';
import FormPost from './FormPost';
import { z } from 'zod';
import { createPost } from '@/fetch/posts';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const CreatePost = () => {
    const router=useRouter()

    const [labels, setLabels] = useState<LabelPost[]>([]);
    const [links, setLinks] = useState<LinkPost[]>([]);
    const [image, setImage] = useState<string>('');
    const [respon, setRespon] = useState<DataRespon>();
    const [loading, setLoading] = useState<boolean>(false);

    const { register, reset, handleSubmit } = useForm({
        resolver: zodResolver(CreatePostSchema),
        defaultValues: {
            title: '',
            desc: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof CreatePostSchema>) => {
        setLoading(true);
        const newPost: Partial<Post> = {
            ...values,
            labels,
            links,
            image: image || '',
        };

        try {
            const dataRespon: DataRespon = await createPost(newPost);
            if (dataRespon.message) {
                setRespon(dataRespon);
            }
        } catch (error) {
            console.log(error);
        }
        reset({
            title: '',
            desc: '',
        });
        setImage('');
        setLabels([]);
        setLinks([]);
        setLoading(false);
        router.push('/posts')
    };

    useEffect(() => {
        if (respon?.message) {
            setRespon(undefined);
        }
    }, [respon]);

    return (
        <div className="relative flex flex-col items-center w-full mt-6">
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
                loading={loading}
            />
        </div>
    );
};

export default CreatePost;
