export function Button({text}) {
    return (
        <div className="flex justify-center p-4"> 
            <button type="button" className=" w-60 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{text}</button>
        </div>
    )
}