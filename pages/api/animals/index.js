import { animals } from "../../../api-data/animals";

export default function animalsHandler(req, res) {
  res.status(200).json(animals);
}