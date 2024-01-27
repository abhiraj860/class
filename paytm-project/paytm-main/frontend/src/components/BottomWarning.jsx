import { Link } from "react-router-dom"

export function BottomWarning({text, link, to}) {
    return (
        <div className="flex justify-center text-sm font-medium mt-4"> 
            {text}&nbsp;
            <Link to={to} className="underline"> 
                {link}
            </Link>
        </div>
    )
}