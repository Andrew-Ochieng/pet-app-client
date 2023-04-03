import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
// import { apiHost } from "../../Variables";
import { getDocs } from "firebase/firestore"
import { ref, remove} from "firebase/database"
import { colRef, db } from "../../Firebase"
import { uid } from "uid";

const Pets = ({loggedIn}) => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        getDocs(colRef)
        .then((snapshot) => {
            // console.log(snapshot.docs)
            let pets = []
            snapshot.docs.forEach((doc) => {
            pets.push({...doc.data(), id: doc.id})
            })
            // console.log(pets)
            setPets(pets)
        })
    }, [])


    const navigate = useNavigate()
    useEffect(() => {
        if(!loggedIn){
            navigate('/home')
        }
    }, [])


    // delete pet
    const handleDelete = (pet) => {
        const uuid = uid()
        remove(ref(db, `/${pet.uuid}`))
    }


    return ( 
        <div className="min-h-screen md:px-24 px-8 py-20">
            <div className="flex flex-col relative">
                <div className="flex justify-between items-center my-5">
                    <h1 className="md:text-2xl text-xl font-bold">ALL PETS</h1>
                    <div className="flex gap-5">
                        <button onClick={() => navigate('/add-pet')}
                            className="border-solid border border-blue py-2 px-5 w-40 rounded-md bg-pink-400 hover:bg-pink-500">
                            Add New
                        </button>
                    </div>
                </div>
                <table>
                    {
                        <tr className="min-w-max-content border-x-solid border border-sky">
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Image</th>
                            <th></th>
                            <th></th>
                        </tr>
                    }
                    {pets.map((pet, id) => (
                            <tr key={id} className="border-x-solid border border-sky">
                                <td className="px-3" >{pet.name}</td>
                                <td className="px-3">{pet.breed}</td>
                                <td className="px-3 py-4 max-w-sm">
                                    <img className="md:w-24 w-12" src={pet.image_url} alt='pet-image'/>
                                </td>
                                <td className="px-5">
                                    <button 
                                        className="border-solid border border-blue py-2 px-4 rounded-md bg-green-300 hover:bg-green-400 w-full" 
                                        onClick={() => handleDelete(pet)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}
 
export default Pets;