export function InputBox({name, placeholder}) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col ">
                <div className="font-bold mb-2 pt-2"> {name} </div> 
                <input type="text" className="border-2 border-slate-200 rounded-sm w-80 p-2" placeholder={placeholder}/>
            </div>  
        </div>
    )
}