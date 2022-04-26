const Login = () => {
    return(
        <div className="h-screen w-screen bg-background flex justify-center items-center text-white">
            <div className="p-5 h-register-h w-register-w bg-gray-800 opacity-90  rounded-lg flex flex-col justify-start items-center">
                <div className="text-3xl font-bold">Create an account</div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Email</div>
                    <input type='text' className="w-full p-1 bg-black rounded-sm"></input>
                </div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Username</div>
                    <input type='text' className="w-full p-1 bg-black rounded-sm"></input>
                </div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Password</div>
                    <input type='password' className="w-full p-1 bg-black rounded-sm"></input>
                </div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Date of Birth</div>
                    <input type='date' className="w-full p-1 bg-black rounded-sm"></input>
                </div>
                <button className="p-1 pt-2 mt-5 bg-blue-600 opacity-100 w-full rounded hover:bg-blue-700 active:bg-blue-800">Login</button>
                <a href="#" className="mt-1 text-sm w-full flex items-start text-blue-400">Already have an account?</a>
            </div>
        </div>            
    )
}

export default Login