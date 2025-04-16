import { About } from "@/app/about";
import { Posts } from "@/app/posts";

export default function Home() {
  return (
    <div className="space-y-10">
      <About />
      <Posts />
    </div>
  );
}
