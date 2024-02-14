import {useNavigate} from 'react-router-dom'

export function Transactions() {
    const navigation = useNavigate();
    function clickHandler() {
        navigation('/dashboard');
    }
    return (
        <div className="flex justify-center mt-10">
            <div className="flex items-center justify-between w-3/4 border-2 font-bold text-2xl p-4 rounded-xl"> 
                <div>
                    Transactions
                </div>
                <div className="flex justify-center items-center">
                <div> 
                    <button onClick={clickHandler} type="button" className="w-18 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back</button>
                </div>
                </div>      
            </div>
        </div>
    )
}