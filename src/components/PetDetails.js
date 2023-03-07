import React, {useContext, useEffect, useState} from "react";
import { appContext } from "../AppContextProvider";
import { apiHost } from "../Variables";

function PetDetails(){
    const {petOnEdit, setPetOnEdit} = useContext(appContext)
    const [statusInfo, setStatusInfo] = useState({project_id: petOnEdit?.id, summary: "", details: ""})
    const [allUsers, setAllUsers] = useState([])

    useEffect(()=>{
        fetch(`${apiHost}/users`)
        .then(result => {
            if(result.ok){
                result.json().then(data => {
                    setAllUsers(data)
                })
            }else {
                result.json().then(error => console.warn(error))
            }
        })    
    }, [petOnEdit])


    function getUniqueUsers(users){
        const uniqueUsers = []
        users?.forEach(user => {
            const memberExists = !!uniqueUsers.find(member => member?.id === user.id)
            if(!memberExists){
                uniqueUsers.push(user)
            }
        })

        return uniqueUsers
    }

    function addToMember(newMember){
        const userId = newMember?.id
        const projectId = petOnEdit?.id

        fetch(`${apiHost}/project-memberships`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user_id: userId, project_id: projectId})
        })
        .then(result => {
            if(result.ok){
                result.json().then(data => {
                    const petOnEditUsers = petOnEdit?.users || []
                    petOnEditUsers.push(newMember)
                    setPetOnEdit(petOnEdit => ({...petOnEdit, users: petOnEditUsers}))})
            }else {
                result.json().then(error => console.warn(error))
            }
        }) 
    }


    return (
        <div id="project-details" className="flex gap-5 min-w-screen p-20">
            <div id="general-info" className="flex flex-col p-4 border-2 mx-2">
                <h1 className="font-bold">Project Info</h1>
                <div className="flex gap-4 my-2">
                    <h1 className="w-16">Name:</h1>
                    <h1>{petOnEdit.name}</h1>
                </div>
                <div className="flex gap-4 my-2">
                    <h1 className="w-16">Topic:</h1>
                    <h3>{petOnEdit.topic}</h3>
                </div>
                <div className="flex gap-4 my-2">
                    <h1 className="w-16">Details:</h1>
                    <p className="w-48">{petOnEdit.details}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default PetDetails;