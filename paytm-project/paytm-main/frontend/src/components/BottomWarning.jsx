import { Link } from "react-router-dom"

export function ButtonWarning({text, link, to}) {
    return (
        <div className="flex justify-center text-sm font-medium"> 
            {text} 
            <Link to={to}> 
                {link}
            </Link>
        </div>
    )
}