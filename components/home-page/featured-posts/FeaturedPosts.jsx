import { PostsGrid } from "@/components/posts/posts-grid/PostsGrid";
import { Lobster } from "next/font/google";
import styles from "./FeaturedPosts.module.css";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });

const posts = [
  {
    slug: "s123",
    title: "Title",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsum sapiente modi odio voluptatem. Itaque id animi",
    image: "lying-in-park.jpg",
    date: "2020/01/12",
  },
];

export const FeaturedPosts = (props) => {
  const { posts } = props;
  
  return (
    <section className={styles.section}>
      <h2 className={font0.className + " " + styles.heading}>
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
