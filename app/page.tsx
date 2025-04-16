import { About } from "@/app/about";
import { Header } from "@/app/header";
import { getAllPosts } from "@/lib/posts";
import { Posts } from "@/app/posts";

export default function Home() {
  return (
    <div className="space-y-10">
      <About />
      <Posts />
    </div>
  );
}
