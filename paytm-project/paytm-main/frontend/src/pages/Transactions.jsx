import { useEffect, useState } from "react";
import { Backbutton } from "../components/Backbutton";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Transactions() {
	const [list, setList] = useState([{}]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [totalSend, setTotalSend] = useState(0);
	const [totalReceived, setTotalReceived] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/account/getTransaction", {
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((res) => {
				const resp = res.data.statement;
				setList(() => resp.transactions);
				setTotalSend(() => resp.send);
				setTotalReceived(() => resp.received);
				setLoading(() => false);
			})
			.catch((error) =>{navigate('/signin')} );
	}, []);

	return (
		<div>{loading === true ? <Loader /> : <TransactionPage list={list} totalSend={totalSend} totalReceived={totalReceived} />}</div>
	);
}

function TransactionPage({ list, totalSend, totalReceived }) {
	return (
		<div>
			<div className="flex justify-center">
				<div className="flex items-center justify-between w-3/4 border-2 font-bold text-2xl p-4 rounded-xl">
					<div>Transactions</div>
					<div className=" text-green-500">{"+"}{totalReceived}</div>
					<div className=" text-red-500">{"-"}{totalSend}</div>
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
			<div>
				<div className="flex justify-center">
					<div className="border-2 rounded-xl h-[450px] w-3/5 overflow-auto">
						{list.reverse().map((value, id) => (
							<List 
								key = {id}
								firstName={value.firstName}
								lastName={value.lastName}
								amount={value.amount}
								received={value.received}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function List({ firstName, lastName, amount, received }) {
	return (
		<div>
			<div className=" font-bold text-xl ">
				<div className="flex justify-between items-center border-b-2 p-5">
					<div className="text-black">
						{firstName} {lastName}
					</div>
					{received === true ? (
						<div className="text-green-500">{"+"}{amount}</div>
					) : (
						<div className="text-red-500">{amount}</div>
					)}
				</div>
			</div>
		</div>
	);
}
