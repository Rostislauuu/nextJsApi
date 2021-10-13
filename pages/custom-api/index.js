import Link from "next/link";

import { getAnimals } from "../../api";

const CustomAPI = ({ animals }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Height</td>
                        <td>Width</td>
                        <td>Origin Country</td>
                    </tr>
                </thead>

                <tbody>
                    {animals.map(animal => {
                        return (
                            <tr key={animal.id}>
                                <td>
                                <Link href={`/custom-api/${animal.id}`}>
                                    <a>
                                        {animal.name}
                                    </a>
                                </Link>
                                </td>
                                <td>{animal.height}</td>
                                <td>{animal.width}</td>
                                <td>{animal.originCountry}</td>                                                        
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps() {
    const animals = await getAnimals();

    return {
        props: {
            animals
        }
    }
}

export default CustomAPI;