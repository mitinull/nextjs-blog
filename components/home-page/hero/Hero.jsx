import Image from "next/image";
import styles from "./Hero.module.css";
import { Inter, Lobster } from "next/font/google";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className={styles.container + " " + font0.className}>
      <div>
        <Image
          className={styles.image}
          src={"/images/site/mohammad.jpg"}
          alt="mohammad"
          width={300}
          height={300}
        />
      </div>
      <h2 className={styles.heading}>Hi, I'm Mohammad</h2>
      <p className={styles.paragraph + " " + font1.className}>
        I made this experimental blog to learn Next.js features!
      </p>
    </section>
  );
};
