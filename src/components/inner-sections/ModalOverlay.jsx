function ModalOverlay({ onClose }) {
	return <div className="w-full h-full" id="overlay" onClick={onClose}></div>;
}

export default ModalOverlay;
