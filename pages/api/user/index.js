import dbConnect from "../../../utils/dbConnect";
import Users from "../../../utils/userModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "POST") {
    try {
      let response = await Users.findOne({ username: req.body.username });
      if (!response)
        response = await Users.create({ username: req.body.username });

      return res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "An Internal Server Error Occoured" });
    }
  } else {
    res.status(500).json({ msg: "Invalid Request" });
  }
}
