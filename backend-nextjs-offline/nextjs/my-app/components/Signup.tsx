export function Signup() {
    return (
        <div className="flex justify-center">
            <div className="flex items-center h-screen">
                <div>
                    <input className="p-2 border-2" type='text' placeholder="username"></input>
                    <br></br>
                    <input className="p-2 mt-5 border-2" type='password' placeholder="password"></input>
                    <div className="p-2 mt-5 text-center bg-black text-white">
                        <button> Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}