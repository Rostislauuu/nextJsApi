export const getAnimals = async () => {
    try {
        const resp = await fetch("http://localhost:3000/api/animals");

        return resp.json();
    } catch (error) {
        return error;
    }
}

export const getSingleAnimal = async (id) => {
    try {
        const resp = await fetch(`http://localhost:3000/api/animals/${id}`);

        return resp.json();
    } catch (error) {
        return error;
    }
}
