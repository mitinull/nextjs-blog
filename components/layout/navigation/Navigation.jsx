import Link from "next/link";
import styles from "./Navigation.module.css";
import { Inter, Lobster } from "next/font/google";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });


export const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={font0.className + " " + styles.logo}>
        Next.js Blog
      </Link>
      <nav>
        <ul className={styles.items + " " + font1.className}>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
