interface Params {
    allPost: Partial<Post>[];
    labels: Partial<LabelPost>[];
    links: Partial<LinkPost>[];
}
export const controlPost = ({ allPost, labels, links }: Params): Post[] => {
    const posts = allPost.map((post) => {
        post.labels = labels.filter((label) => label.postId === post.id) as LabelPost[];
        post.links = links.filter((link) => link.postId === post.id) as LinkPost[];
        return post as Post;
    });

    return posts as Post[];
};
