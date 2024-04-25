import { motion } from "framer-motion";
function App() {
	return (
		<div className="flex justify-center">
			<motion.div
        animate={{rotate:[0, 200, 200, 0], x:[0, 200, 200, 0, -200, -200, 0]}}
        transition={{repeat: Infinity, duration: 2}}
        className="rounded-2xl w-40 h-40 bg-red-400 mt-20"
			></motion.div>
		</div>
	);
}

export default App;
