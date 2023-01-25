import SheetList from "../../data/SheetList";

export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json(SheetList);
}
