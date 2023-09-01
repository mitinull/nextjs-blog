import { Inter } from "next/font/google";
import styles from "./PostDetail.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const font1 = Inter({ subsets: ["latin"] });

export const PostDetail = (props) => {
  const { slug, title, content, image, date } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const markdownCustomComponents = {
    p(p) {
      if (p.children[0].type === "img") {
        const { alt, src } = p.children[0].props;
        const imagePath = `/images/posts/${slug}/${src}`;
        console.log(image);
        return (
          <div className={styles.image}>
            <Image
              alt={alt}
              src={imagePath}
              width={640}
              height={380}
            />
          </div>
        );
      }

      return <p>{p.children}</p>;
    },
  };

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
        <ReactMarkdown
          children={content}
          className={styles.content}
          components={markdownCustomComponents}
        />
      </div>
    </article>
  );
};
