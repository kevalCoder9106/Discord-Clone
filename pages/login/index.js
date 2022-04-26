const Login = () => {
    return(
        <div className="h-screen w-screen bg-background flex justify-center items-center text-white">
            <div className="p-5 h-login-h w-login-w bg-gray-800 opacity-90  rounded-lg flex flex-col justify-start items-center">
                <div className="text-2xl font-bold">Welcome back!</div>
                <div className="text-sm text-gray-400">We're so excited to see you again!</div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Email</div>
                    <input type='text' className="w-full p-1 bg-black rounded-sm"></input>
                </div>
                <div className="w-full pt-5 flex items-center flex-col">
                    <div className="w-full text-sm text-gray-400 flex items-start">Password</div>
                    <input type='password' className="w-full p-1 bg-black rounded-sm"></input>
                    <div className="w-full flex items-start"><a href="#" className="text-blue-400 text-sm">Forgot your password?</a></div>
                </div>
                <button className="p-1 pt-2 mt-5 bg-blue-600 opacity-100 w-full rounded hover:bg-blue-700 active:bg-blue-800">Login</button>
                <span className="w-full flex items-center mt-1 text-gray-400 text-sm">Need an account?<a href="#" className="text-blue-400">&nbsp;Register</a></span>
            </div>
        </div>            
    )
}

export default Login