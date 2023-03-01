import { useState } from "react";
import { Link } from "react-router-dom"
import signupImg from '../assets/signup.png'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault();
        e.target.reset();

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
            .then()

        alert("hello")
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen md:mx-16 mx-6">
            <div className="sm:flex justify-center items-center">
                    <div className="md:w-1/2">
                        <img src={signupImg} alt='login-image'/>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800">Signup</h1>
                        <form onSubmit={handleForm}>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter username.." 
                                    class="form-input"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Enter email.." 
                                    class="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    placeholder="Enter password.." 
                                    class="form-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <button className="btn btn-secondary w-full">
                                Submit
                            </button>
                        </form>

                        <p className="mt-4">
                            Already Signed Up? 
                            <Link to='/login' className="mx-2 text-info font-semibold">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Signup;