export const createPost = async (newPost: Partial<Post>) => {
    try {
        const data = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        if (!data.ok) {
            throw new Error(`Failed to create post: ${data.status} - ${data.statusText}`);
        }

        const response = await data.json();
        return response; 
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};
