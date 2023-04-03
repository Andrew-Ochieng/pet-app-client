import { useState } from "react"
// import { apiHost } from "../../Variables";
import { addDoc } from "firebase/firestore"
import { colRef } from "../../Firebase"

const AddPet = () => {
    const [petName, setPetName] = useState("")
    const [petBreed, setPetBreed] = useState("")
    const [petImage, setPetImage] = useState("")

    
    const handleForm = (e) => {
        e.preventDefault()

        addDoc(colRef, {
            name: petName,
            breed: petBreed,
            image_url: petImage

        })
        
    }

    // function updateFormData(e){

    //     setPetFormData(petFormData => {
    //         return {...petFormData, [e.target.id]: e.target.value}
    //     })

    // }

    // const handleForm = (e) => {
    //     e.preventDefault();
    //     console.log(petFormData)

    //     fetch(`${apiHost}/pets`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(petFormData)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then((data) => {
    //                 setPetFormData(
    //                     {
    //                         name: "",
    //                         breed: "",
    //                         image_url: "",
    //                         user_id: JSON.parse(localStorage.getItem('user') || false)?.id
    //                     }
    //                 )
    //             })
    //         }else {
    //             res.json().then(error => console.warn(error))
    //         }
    //     })
    // }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen md:my-8 my-4 mx-6">
                <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800 md:mb-16 mb-8">Add New Porject</h1>
                <form onSubmit={handleForm} id='form'>
                    <div>
                        <label className='form-label'> 
                            Pet name
                        </label>
                        <input 
                            id="name"
                            type="text"  
                            class="input-form"
                            placeholder="Pet name"
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Breed
                        </label>
                        <input 
                            id="breed"
                            type="text" 
                            class="input-form"
                            placeholder="Breed"
                            value={petBreed}
                            onChange={(e) => setPetBreed(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Image URL
                        </label>
                        <input 
                            id="image_url"
                            class="textarea textarea-info w-full my-4" 
                            rows='3'
                            placeholder="Image URL"
                            value={petImage}
                            onChange={(e) => setPetImage(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default AddPet;