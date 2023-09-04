import axios from "axios";
import { toast } from "react-toastify";

export const sendMessageHandler = async (
  event,
  nameInputRef,
  emailInputRef,
  messageInputRef,
  setIsPending,
  setShowThankYou
) => {
  setIsPending(true);

  event.preventDefault();

  const name = nameInputRef.current.value;
  const email = emailInputRef.current.value;
  const message = messageInputRef.current.value;

  try {
    const response = await axios.post("/api/contact", {
      name,
      email,
      message,
    });
    toast.success("Your message sent successfully!");
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
    setShowThankYou(true);
  } catch (err) {
    if (err.response?.data) {
      toast.error(err.response.data);
    } else {
      toast.error("Something went wrong!");
    }
  } finally {
    setIsPending(false);
  }
};
