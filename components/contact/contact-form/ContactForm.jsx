import { Inter, Lobster } from "next/font/google";
import styles from "./ContactForm.module.css";
import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const font0 = Lobster({ subsets: ["latin"], weight: "400" });
const font1 = Inter({ subsets: ["latin"] });

export const ContactForm = ({ onSubmit }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [isPending, setIsPending] = useState(false);

  return (
    <>
      <div className={styles.formContainer + " " + font1.className}>
        <h1 className={font0.className}>
          Have something on your mind? Tell me!
        </h1>
        <form
          onSubmit={(event) =>
            onSubmit(
              event,
              nameInputRef,
              emailInputRef,
              messageInputRef,
              setIsPending
            )
          }
        >
          <label>
            <h3>Your Name</h3>
            <input
              ref={nameInputRef}
              type="text"
              required
              disabled={isPending}
            />
          </label>
          <label>
            <h3>Your Email</h3>
            <input
              ref={emailInputRef}
              type="email"
              required
              disabled={isPending}
            />
          </label>
          <label>
            <h3>Your Message</h3>
            <textarea
              ref={messageInputRef}
              name=""
              id=""
              rows="7"
              required
              disabled={isPending}
            ></textarea>
          </label>
          <button disabled={isPending}>
            {!isPending ? "Send Message" : "..."}
          </button>
        </form>
      </div>
    </>
  );
};
