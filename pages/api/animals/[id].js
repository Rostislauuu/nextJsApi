import { animals } from "../../../api-data/animals";

export default function singleAnimalHandler(req, res) {
    const singleAnimal = animals.find(animal => animal.id === req.query.id);
    
    if (!!singleAnimal) {
        res.status(200).json(singleAnimal);
    } else {
        res.status(404).json({ errorMessage: "Could not found animal" });
    }
}
