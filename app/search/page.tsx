'use client'
import { useEffect, useMemo, useState } from "react";
import { getLabels, getPosts } from "@/fetch/posts";
import Post from "@/components/Posts/Post";
import Load from "@/components/search/Load";

const Page = () => {
  const [search, setSearch] = useState<string>("");
  const [labels, setLabels] = useState<string[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.toLowerCase()) ||
      post.labels.some((label: LabelPost) =>
        label.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  useEffect(() => {
    const fetchDataPosts = async () => {
      try {
        const postsData = await getPosts();
        const labels = await getLabels();
        const labelsData = labels.map((label: LabelPost) => label.name);
        setLabels(Array.from(new Set(labelsData)));
        setPosts(postsData.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchDataPosts();
  }, []);

  return (
    <div>
      <form className="w-full max-w-xl mx-auto flex gap-2">
        <input
          type="text"
          placeholder="Search by title or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-lg shadow-slate-600"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-lg shadow-slate-600"
        >
          Search
        </button>
      </form>

      <div className="w-full max-w-xl mx-auto flex justify-center gap-4 overflow-x-scroll py-6 no-scrollbar">
        {labels.length > 0 && (
          labels.map((label: string) => (
            <button
              type="button"
              onClick={() => setSearch(label)}
              key={label}
              className="text-slate-200 bg-blue-600 px-4 py-1.5 rounded text-center font-semibold shadow-md shadow-slate-600 hover:scale-110 transition-all duration-150"
            >
              {label}
            </button>
          ))
        )}
      </div>

      <div className="pb-4 flex w-full max-w-[80%] mx-auto gap-8 justify-center flex-wrap">
        {filteredPosts.map((post: Post) => (
          <Post key={post.id} {...post} />
        ))}
        {!filteredPosts.length && search.length === 0 && (
          Array.from(new Array(4).keys()).map((key) => <Load key={key} />)
        )}
        {posts.length > 0 && filteredPosts.length === 0 && search.length > 0 && (
          <p className="text-red-600 text-center text-3xl font-semibold">No posts yet</p>
        )}
      </div>
    </div>
  );
};

export default Page;
