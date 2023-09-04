import { Inter, Lobster } from "next/font/google";
import styles from "./ThankYou.module.css";
import Link from "next/link";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });

export const ThankYou = () => {
  return (
    <div className={styles.container + " " + font1.className}>
      <div className={styles.content}>
        <div className={styles.emoji}>🙏🏻</div>

        <h1 className={font0.className}>
          Thank You for Your Message!
        </h1>
        <p>
          Your message has been received successfully. I will review
          the message and get in touch with you via email if needed.
          Feel free to explore my blog for more content.
        </p>
        <Link href="/">
          <button type="button">HOME PAGE</button>
        </Link>
      </div>
    </div>
  );
};
