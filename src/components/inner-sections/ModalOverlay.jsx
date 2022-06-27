import { motion, AnimatePresence } from "framer-motion";

function ModalOverlay({ children }) {
	return (
		<AnimatePresence>
			<motion.div
				className="container mx-auto flex justify-center items-center"
				initial={{ y: -300 }}
				animate={{ y: 0 }}
				exit={{ y: 0 }}
				transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export default ModalOverlay;
