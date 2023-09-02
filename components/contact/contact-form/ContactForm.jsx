import { Inter, Lobster } from "next/font/google";
import styles from "./ContactForm.module.css";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });

export const ContactForm = () => {
  return (
    <div className={styles.formContainer+" "+font1.className}>
      <h1 className={font0.className}>Have something on your mind? Tell me!</h1>
      <form>
        <label>
          <h3>Your Name</h3>
          <input type="text" />
        </label>
        <label>
          <h3>Your Email</h3>
          <input type="email" />
        </label>
        <label>
          <h3>Your Message</h3>
          <textarea name="" id="" rows="7"></textarea>
        </label>
        <button>Send Message</button>
      </form>
    </div>
  );
};
