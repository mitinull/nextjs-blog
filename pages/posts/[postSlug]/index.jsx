import { PostDetail } from "@/components/posts/post-detail/PostDetail";
import { getAllPostsFilenames } from "@/utils/posts-utils/get-all-posts-filenames";
import { readPost } from "@/utils/posts-utils/read-post";
import { removeFilenameExtension } from "@/utils/posts-utils/remove-filename-extension";

export default function PostDetailPage(props) {
  const { slug, title, content, image, date } = props;

  return (
    <main>
      <PostDetail
        slug={slug}
        title={title}
        content={content}
        image={image}
        date={date}
      />
    </main>
  );
}

export function getStaticProps(context) {
  const { postSlug } = context.params;
  const post = readPost(postSlug);

  return {
    props: { ...post },
  };
}

export function getStaticPaths() {
  const postsFilenames = getAllPostsFilenames();

  const paths = postsFilenames.map((filename) => ({
    params: { postSlug: removeFilenameExtension(filename) },
  }));

  return { paths, fallback: false };
}
