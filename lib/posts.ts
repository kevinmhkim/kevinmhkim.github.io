import matter from "gray-matter";
import fs from "fs";

const POSTS_DIR = "public/posts";

export interface PostData {
  id: string;
  title: string;
  date: string;
  content: string;
  contentLength: number;
}

export function getAllPosts() {
  const filenames = fs.readdirSync(POSTS_DIR);
  return filenames.map((filename) => {
    const content = fs.readFileSync(`${POSTS_DIR}/${filename}`);
    const matterObj = matter(content);

    const postData: PostData = {
      id: matterObj.data.id,
      title: matterObj.data.title,
      date: matterObj.data.date,
      content: matterObj.content,
      contentLength: matterObj.content.length,
    };
    return postData;
  });
}

export function getPost(postId: string) {
  const content = fs.readFileSync(`${POSTS_DIR}/${postId}`);
  const matterObj = matter(content);

  const postData: PostData = {
    id: matterObj.data.id,
    title: matterObj.data.title,
    date: matterObj.data.date,
    content: matterObj.content,
    contentLength: matterObj.content.length,
  };
  return postData;
}
