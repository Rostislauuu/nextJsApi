import { getSingleAnimal } from "../../api";

const SingleAnimal = ({ animal }) => {
    return (
        <div>
            {animal.name}
        </div>
    )
}

export async function getServerSideProps(params) {
    const animal = await getSingleAnimal(params.query.id);
    
    if (animal.errorMessage) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            animal
        }
    }
}

export default SingleAnimal;
