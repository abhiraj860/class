import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Check({goto}) {
	const navigate = useNavigate();
	useEffect(() => {
		try {
			axios
				.get("http://localhost:3000/api/v1/user/me", {
					headers: {
						authorization: "Bearer " + localStorage.getItem("token"),
					},
				})
				.then(() => {
					navigate(goto);
				});
		} catch (error) {
			console.log(error);	
		}
	}, []);

	return <div></div>;
}
