import SheetList from "../../../data/SheetList";

export default function handler(req, res) {
  if (req.method === "GET") {
    let num = Number(req.query.id);
    res.status(200).json(SheetList[num - 1]);
  }
}
