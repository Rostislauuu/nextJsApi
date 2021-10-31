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

export const postMessage = async ({ message, userId }) => {
    try {
        const resp = await fetch("https://evening-citadel-13160.herokuapp.com/chat_rooms/1/chat_messages", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message, user_id: userId })
          });

        return resp.json();
    } catch (error) {
        return error;
    }
}
