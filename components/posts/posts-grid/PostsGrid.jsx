import { PostItem } from "../post-item/PostItem";

export const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul>
      {posts.map((post) => {
        const { slug, title, excerpt, image, date } = post;
        return (
          <PostItem
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
