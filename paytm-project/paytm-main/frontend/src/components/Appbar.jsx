import { Dropdown } from "./Dropdown";

export function Appbar({ firstName }) {
	return (
		<div className="flex justify-center">
			<div className="flex items-center justify-between w-3/4 border-2 font-bold text-lg p-4 rounded-xl">
				<div>Payments APP</div>
				<div className="flex justify-center items-center">
					<div className="mr-5">Hello, {firstName}</div>
					<Dropdown firstName={firstName[0]} />
				</div>
			</div>
		</div>
	);
}
