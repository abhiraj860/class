import { useNavigate } from "react-router-dom";

export function Backbutton() {
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/dashboard');
    }
    return (
        <div>
            <button
                onClick={clickHandler}
                type="button"
                className="w-18 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Back
            </button>
        </div>
    );
}