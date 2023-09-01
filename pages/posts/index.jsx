import { AllPosts } from "@/components/posts/all-posts/AllPosts";
import { readAllPosts } from "@/utils/posts-utils/read-all-posts";

const DUMMY_POSTS = [
  {
    slug: "s123",
    title: "Cycling on Earth",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsum sapiente modi odio voluptatem. Itaque id animi",
    image: "lying-in-park.jpg",
    date: "2020/01/12",
  },
];

export default function PostsPage(props) {
  return (
    <main>
      <AllPosts posts={props.posts} />
    </main>
  );
}

export function getStaticProps() {
  const posts = readAllPosts();

  return {
    props: { posts },
  };
}
