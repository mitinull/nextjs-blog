import { Inter, Lobster } from "next/font/google";
import styles from "./ContactForm.module.css";
import { useRef } from "react";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });

export const ContactForm = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;
    console.log({ name, email, message });
  };

  return (
    <div className={styles.formContainer + " " + font1.className}>
      <h1 className={font0.className}>
        Have something on your mind? Tell me!
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Your Name</h3>
          <input ref={nameInputRef} type="text" required />
        </label>
        <label>
          <h3>Your Email</h3>
          <input ref={emailInputRef} type="email" required />
        </label>
        <label>
          <h3>Your Message</h3>
          <textarea
            ref={messageInputRef}
            name=""
            id=""
            rows="7"
            required
          ></textarea>
        </label>
        <button>Send Message</button>
      </form>
    </div>
  );
};
