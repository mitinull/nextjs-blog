import { Inter } from "next/font/google";
import styles from "./PostDetail.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const font1 = Inter({ subsets: ["latin"] });

const DUMMY_POST = {
  slug: "s123",
  title: "Cycling on Earth",
  content: "## Lorem ipsum dolor\n\n consectetur adipisicing elit. Consequatur, ex. Ullam repudiandae id alias nihil enim modi commodi, voluptatum iusto ipsum atque quae et debitis. Dolore laborum quasi ratione.",
  image: "lying-in-park.jpg",
  date: "2020/01/12",
};

export const PostDetail = () => {
  const { slug, title, content, image, date } = DUMMY_POST;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={styles.article + " " + font1.className}>
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
          <time>{formattedDate}</time>
          <div className={styles.image}>
            <Image
              alt={title}
              src={imagePath}
              width={640}
              height={380}
              priority
            />
          </div>
        </header>
        <ReactMarkdown className={styles.content}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};
