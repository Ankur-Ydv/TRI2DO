import dbConnect from "../../../utils/dbConnect";
import Users from "../../../utils/userModel";

export default async function handler(req, res) {
  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  if (req.method === "GET") {
    try {
      const response = await Users.findById(req.query.userId);

      if (!response) return res.status(400).json({ msg: "User Not Found" });

      return res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "An Internal Servor Error Occoured" });
    }
  } else if (req.method === "PUT") {
    try {
      const { sheetId, problem, arrayType, isAddRequest } = req.body;
      const updateObject = {};
      let response;
      if (isAddRequest) {
        updateObject[`sheet${sheetId}.${arrayType}`] = problem;
        response = await Users.findByIdAndUpdate(
          req.query.userId,
          {
            $addToSet: updateObject,
          },
          { new: true }
        );
      } else {
        updateObject[`sheet${sheetId}.${arrayType}`] = problem;
        response = await Users.findByIdAndUpdate(
          req.query.userId,
          {
            $pull: updateObject,
          },
          { new: true }
        );
      }

      if (!response) return res.status(400).json({ msg: "Not Updated" });

      return res.status(200).json({ response, msg: "Updated Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "An Internal Server Error Occoured" });
    }
  } else {
    res.status(500).json({ msg: "Invalid Request" });
  }
}
