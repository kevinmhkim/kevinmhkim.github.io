import { getAllPosts } from "@/lib/posts";
import { Post } from "@/app/post";

export function Posts() {
  const posts = getAllPosts();

  return posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
}
