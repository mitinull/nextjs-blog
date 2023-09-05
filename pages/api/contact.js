import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log({ name, email, message });

    if (
      !name ||
      !name.trim() ||
      !message ||
      !message.trim() ||
      !email.includes("@")
    ) {
      return res.status(422).json("Invalid Input!");
    }

    try {
      await axios.post(process.env.SEND_EMAIL_API_URL, {
        name,
        email,
        message,
      });
      return res.status(201).json("Message received successfully!");
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.error === "Validation errors") {
        return res.status(422).json("Invalid input!");
      }
      return res.status(500).json("Message was not sent!");
    }
  }
}
