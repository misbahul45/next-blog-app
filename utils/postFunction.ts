interface ParamsAllPost {
    allPost: Partial<Post>[];
    labels: Partial<LabelPost>[];
    links: Partial<LinkPost>[];
    comments: CommentPost[];
}
interface ParamsSinglePost {
    post: Partial<Post>;
    labels: Partial<LabelPost>[];
    links: Partial<LinkPost>[];
    comments: CommentPost[];
}
export const controlPost = ({ allPost, labels, links, comments }: ParamsAllPost): Post[] => {
    const posts = allPost.map((post) => {
        post.labels = labels.filter((label) => label.postId === post.id) as LabelPost[];
        post.links = links.filter((link) => link.postId === post.id) as LinkPost[];
        post.comments = comments.filter((comment) => comment.postId === post.id) as CommentPost[];
        return post as Post;
    });

    return posts as Post[];
};


export const controlSinglePost = ({ post, labels, links, comments }: ParamsSinglePost) => {
    post.labels = labels.filter((label) => label.postId === post.id) as LabelPost[];
    post.links = links.filter((link) => link.postId === post.id) as LinkPost[];
    post.comments = comments.filter((comment) => comment.postId === post.id) as CommentPost[];
    return post as Post;
}
