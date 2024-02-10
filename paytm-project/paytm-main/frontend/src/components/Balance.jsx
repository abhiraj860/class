

export function Balance({balance}) {
    
    return (
        <div className="flex justify-center">    
            <div className="w-3/4 font-bold text-lg flex justify-start">
                <div className="mt-5">
                    Your balance Rs {balance}
                </div> 
            </div>
        </div>
    )
}