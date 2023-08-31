import { AllPosts } from "@/components/posts/all-posts/AllPosts";

const DUMMY_POSTS = [
  {
    slug: "s123",
    title: "Cycling on Earth",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsum sapiente modi odio voluptatem. Itaque id animi",
    image: "lying-in-park.jpg",
    date: "2020/01/12",
  },
];

export default function PostsPage() {
  return (
    <main>
      <AllPosts posts={DUMMY_POSTS} />
    </main>
  );
}
