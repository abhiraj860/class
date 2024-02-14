export function Appbar({firstName}) {
   
    return (
    <div className="flex justify-center">
        <div className="flex items-center justify-between w-3/4 border-2 font-bold text-lg p-4 rounded-xl"> 
            <div>
                Payments APP
            </div>
            <div className="flex justify-center items-center">
                <div className="mr-5">
                    Hello, {firstName} 
                </div>
                <div className="flex justify-center items-center border-2 border-slate-300 w-10 h-10 rounded-full bg-slate-300">
                    <div>
                        {firstName[0]}
                    </div>
                </div>
            </div>      
        </div>
    </div>
    )
}