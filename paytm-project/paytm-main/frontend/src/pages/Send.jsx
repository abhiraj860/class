import { useSearchParams } from "react-router-dom"

export function Send() {
    const [searchParams] = useSearchParams();
    const id = searchParam.get("id");
    const name = searchParams.get("name");
    return (
        <div className="flex justify-center">
            <div className="w-96 h-80 mt-16 shadow-2xl shadow-gray-400 rounded-lg">
                <div className="text-center font-extrabold text-2xl mt-8">
                    Send Money
                </div>
                <div className="ml-11 mt-14">
                    <div className="flex justify-start items-center">
                        <div className='w-10 h-10  flex items-center justify-center rounded-full text-white bg-green-500 text-lg'>
                            <div>
                                {name[0].toUpperCase()}
                            </div>
                        </div>
                        <div className="font-bold text-xl ml-3">
                            {name}
                        </div>
                    </div>
                    <div className="font-medium text-sm mt-1">
                        Amount (in Rs)
                    </div>
                    <div className="mt-3">
                        <input type="number" className="border-2 rounded-lg w-5/6 p-2" placeholder="Enter amount" />
                    </div>
                    <div className="mt-3">
                        <button onClick={async ()=>{
                            axios.post('http://localhost:3000/api/v1/account/transfer', {
                                to: id,
                                amount
                            }, {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            });
                        }} type="button" className="w-5/6 focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer</button>

                    </div>
            
                </div>
            </div>
        </div>
    )
}