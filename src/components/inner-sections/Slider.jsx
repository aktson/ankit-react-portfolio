import { FaAngleLeft, FaAngleRight, FaDotCircle } from "react-icons/fa";
import { useState } from "react";

function Slider({ sliderImages, length }) {
	const [current, setCurrent] = useState(0);

	const slideLeft = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	const slideRight = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const dots = sliderImages.map((dot, index) => {
		return (
			<span className={index === current ? " active-slide-indicator slide-indicator" : "slide-indicator"} key={index}>
				<FaDotCircle />
			</span>
		);
	});
	const mappedImages = sliderImages.map((image, index) => {
		const sliderImage = image.attributes.url;
		return (
			<div className={index === current ? "slider active-slide" : "slider"} key={index}>
				{index === current && (
					<div className="h-96 min-h-full" style={{ background: `url(${sliderImage}) no-repeat center`, backgroundSize: "cover" }}></div>
				)}
			</div>
		);
	});

	return (
		<>
			{
				<div className=" flex  justify-center items-center mx-auto overflow-clip  relative w-full">
					<button className="btn btn-accent  absolute rounded-full left-2 shadow-xl z-10" onClick={slideLeft}>
						<FaAngleLeft />
					</button>
					<button className="btn btn-accent absolute rounded-full right-2 shadow-xl z-10" onClick={slideRight}>
						<FaAngleRight />
					</button>
					<div className="z-50  absolute bottom-2 flex gap-2">{dots}</div>
					{mappedImages}
				</div>
			}
		</>
	);
}

export default Slider;
