import { readAllPosts } from "./read-all-posts";

export const readFeaturedPosts = () => {
  const allPosts = readAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
