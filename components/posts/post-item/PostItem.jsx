import Image from "next/image";
import Link from "next/link";
import styles from "./PostItem.module.css";
import { Inter } from "next/font/google";

const font1 = Inter({ subsets: ["latin"] });

export const PostItem = (props) => {
  const { slug, title, excerpt, image, date } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.container + " " + font1.className}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            alt={title}
            src={imagePath}
            width={700}
            height={400}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
