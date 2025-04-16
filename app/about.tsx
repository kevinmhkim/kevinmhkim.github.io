"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function About() {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <div className="text-lg">👋 Hey there! I'm a dev and ex-founder.</div>
      <div className="flex space-x-4">
        <Link href="https://github.com/kevinmhkim">
          <Image
            src="github.svg"
            alt="Github"
            width={24}
            height={24}
            className="dark:invert"
          />
        </Link>
        <Link href="https://linkedin.com/in/minhwan">
          <Image src="linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
