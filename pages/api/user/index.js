import dbConnect from "../../../utils/dbConnect";
import Users from "../../../utils/userModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    try {
      const { username, password, login } = req.body;

      const response = await Users.findOne({ username });

      if (login) {
        // registering new user
        if (response) {
          return res.status(201).json({ msg: "User Already Registered" });
        }
        const resp = await Users.create({ username, password });

        return res.status(200).json({ resp });
      }

      if (!response || response.password !== password)
        return res.status(201).json({ msg: "Invalid Credentials" });

      return res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "An Internal Server Error Occoured" });
    }
  } else {
    res.status(500).json({ msg: "Invalid Request" });
  }
}
