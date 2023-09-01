import { readPost } from "./read-post";
import { getAllPostsFilenames } from "./get-all-posts-filenames";

export const readAllPosts = () => {
  const postsFileNameArray = getAllPostsFilenames();

  const allPosts = postsFileNameArray.map(readPost);

  const sortedPosts = allPosts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  );

  return sortedPosts;
};
