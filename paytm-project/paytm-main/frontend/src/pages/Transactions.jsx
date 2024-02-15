import { useNavigate } from "react-router-dom";
import { Backbutton } from "../components/Backbutton";

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
						<Backbutton />
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
