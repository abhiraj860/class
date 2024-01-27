export function Send() {
    return (
        <div class="flex justify-center">
            <div class="w-96 h-80 shadow-2xl shadow-gray-400 rounded-lg">
                <div class="text-center font-extrabold text-2xl mt-8">
                    Send Money
                </div>
                <div class="ml-11 mt-14">
                    <div class="flex justify-start items-center">
                        <div class='w-10 h-10  flex items-center justify-center rounded-full text-white bg-green-500 text-lg'>
                            <div>
                                A
                            </div>
                        </div>
                        <div class="font-bold text-xl ml-3">
                            Friend's Name
                        </div>
                    </div>
                    <div class="font-medium text-sm mt-1">
                        Amount (in Rs)
                    </div>
                    <div class="mt-3">
                        <input type="number" class="border-2 rounded-lg w-5/6 p-2" placeholder="Enter amount" />
                    </div>
                    <div class="mt-3">
                        <button type="button" class="w-5/6 focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer</button>

                    </div>
            
                </div>
            </div>
        </div>
    )
}