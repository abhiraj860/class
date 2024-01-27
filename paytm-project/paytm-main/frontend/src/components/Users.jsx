export function Users() {
    return (
            <div className="mt-5">
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg w-3/4">
                    Users
                </div>
            </div>
            <div className="grid grid-row-1 place-items-center mt-4">
                <div className="w-full flex justify-center">
                    <input type="text" className="border-2 border-slate-200 rounded-sm w-3/4 p-2" placeholder="Search users..."/>
                </div>
                <div className="mt-5"></div>
            <div className="flex justify-between w-3/4 mt-5">
                <div className="flex justify-start items-center">
                    <div className="flex justify-center items-center border-2 border-slate-300 w-10 h-10 rounded-full bg-slate-300">
                    <div>
                        U
                    </div>
                    </div>
                    <div className="ml-3 font-bold text-md">
                    Hello
                    </div>

                </div>  
                <div>
                <button type="button" className=" w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                </div>
            </div>

            <div className="flex justify-between w-3/4 mt-5">
                <div className="flex justify-start items-center">
                    <div className="flex justify-center items-center border-2 border-slate-300 w-10 h-10 rounded-full bg-slate-300">
                    <div>
                        U
                    </div>
                    </div>
                    <div className="ml-3 font-bold text-md">
                    Hello
                    </div>

                </div>  
                <div>
                <button type="button" className=" w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                </div>
            </div>
            </div>
            
        </div>
        
    )
}