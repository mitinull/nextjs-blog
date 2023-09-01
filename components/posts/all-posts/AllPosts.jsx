import { Lobster } from "next/font/google";
import { PostsGrid } from "../posts-grid/PostsGrid";
import styles from "./AllPosts.module.css";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });

export const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={styles.section}>
      <h1 className={font0.className}>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
