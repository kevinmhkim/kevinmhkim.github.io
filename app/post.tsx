"use client";

import { PostData } from "@/lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function Post({ post }: { post: PostData }) {
  const router = useRouter();

  return (
    <Card
      className={cn("rounded p-6 cursor-pointer")}
      onClick={() => {
        router.push(`posts/${post.id}`);
      }}
    >
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{post.title}</CardTitle>
          <div className="text-muted-foreground text-sm">{post.date}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground line-clamp-2">{post.content}</div>
      </CardContent>
    </Card>
  );
}
