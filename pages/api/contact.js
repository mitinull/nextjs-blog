export default function handler(req, res) {
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
      return res.status(422).json("Invalid Input.");
    }

    return res.status(201).json("Message received successfully!");
  }
}
