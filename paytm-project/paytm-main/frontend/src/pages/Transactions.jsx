import { useNavigate } from "react-router-dom";

export function Transactions() {
	const navigation = useNavigate();
	function clickHandler() {
		navigation("/dashboard");
	}
	return (
		<div>
			<div className="flex justify-center">
				<div className="flex items-center justify-between w-3/4 border-2 font-bold text-2xl p-4 rounded-xl">
					<div>Transactions</div>
					<div className=" text-green-500">+5000</div>
					<div className=" text-red-500">-1000</div>
					<div className="flex justify-center items-center">
						<div>
							<button
								onClick={clickHandler}
								type="button"
								className="w-18 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center  items-center mt-5">
				<div className="w-3/5 font-bold text-2xl flex justify-center pb-5 pl-5 pr-10">
					<div className="text-black">Statement</div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="border-2 rounded-xl h-[450px] w-3/5 overflow-auto">
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
					<div>
						<div className=" font-bold text-xl ">
							<div className="flex justify-between items-center border-b-2 p-5">
								<div className=" text-black">Abhiraj</div>
								<div className=" text-red-500">-1000</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
