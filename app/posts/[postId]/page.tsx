import { getAllPosts, getPost } from "@/lib/posts";
import Markdown from "react-markdown";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => {
    return { postId: post.id };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = getPost(`${postId}.md`);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Markdown>{`# ${post.title}`}</Markdown>
        <div className="text-muted-foreground">
          <Markdown>{post.date}</Markdown>
        </div>
      </div>
      <div className="dark:text-neutral-300 whitespace-pre-line">
        <Markdown>{post.content}</Markdown>
      </div>
    </div>
  );
}
