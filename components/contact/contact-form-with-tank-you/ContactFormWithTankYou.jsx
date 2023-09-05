import { useState } from "react";
import { ContactForm } from "../contact-form/ContactForm";
import { ThankYou } from "../tank-you/ThankYou";
import { sendMessageHandler } from "./sendMessageHandler";
import { ToastContainer } from "react-toastify";

export const ContactFormWithTankYou = () => {
  const [showTankYou, setShowTankYou] = useState(false);
  return (
    <>
      {!showTankYou ? (
        <ContactForm
          onSubmit={(...extra) =>
            sendMessageHandler(...extra, setShowTankYou)
          }
        />
      ) : (
        <ThankYou />
      )}
    </>
  );
};
