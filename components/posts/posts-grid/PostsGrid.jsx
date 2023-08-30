import { PostItem } from "../post-item/PostItem";
import styles from "./PostGrid.module.css";

export const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => {
        const { slug, title, excerpt, image, date } = post;
        return (
          <PostItem
            key={slug}
            slug={slug}
            title={title}
            excerpt={excerpt}
            image={image}
            date={date}
          />
        );
      })}
    </ul>
  );
};
