import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export function Dropdown({ firstName }) {
	const navigate = useNavigate();

	function clickHandler() {
		localStorage.clear();
		navigate("/SignIn");
	}
	function clickTransactionHandler() {
		navigate("/Transaction");
	}

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button>
					<div className="text-lg flex justify-center items-center border-2 border-slate-300 w-10 h-10 rounded-full bg-slate-300">
						<div>{firstName}</div>
					</div>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={clickTransactionHandler}
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block w-full px-4 py-2 text-left text-sm"
									)}
								>
									Transactions
								</button>
							)}
						</Menu.Item>
					</div>
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={clickHandler}
									type="submit"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block w-full px-4 py-2 text-left text-sm"
									)}
								>
									Sign out
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
