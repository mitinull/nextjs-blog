import { PostItem } from "@/components/posts/post-item/PostItem";
import { PostsGrid } from "@/components/posts/posts-grid/PostsGrid";

const posts = [
  {
    slug: "s123",
    title: "title",
    excerpt: "excerpt",
    image: "i123",
    date: "2020/01/12",
  },
];

export const FeaturedPosts = () => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
