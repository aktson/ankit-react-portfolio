import { useContext } from "react";
import LangContext from "../../context/LangContext";

function Themes() {
	const [html] = document.getElementsByTagName("html");
	const { isChecked, setIsChecked, defaultTheme, setDefaultTheme } = useContext(LangContext);

	html.setAttribute("data-theme", defaultTheme);
	const changeTheme = () => {
		if (defaultTheme === "dark") {
			setDefaultTheme("light");
			setIsChecked(false);
		} else {
			setDefaultTheme("dark");
			setIsChecked(true);
		}
	};
	return (
		<div className="form-control w-32 " style={{ zIndex: "251" }}>
			<label className="cursor-pointer label flex gap-1 sm:gap-0 px-0 ">
				<input
					type="checkbox"
					className="toggle toggle-primary bg-primary border-transparent"
					onClick={changeTheme}
					defaultChecked={isChecked}
				/>
				<span className="label-text text-base-100 sm:text-primary text-center text-md sm:text-sm">
					{isChecked ? "Light Mode" : "Dark Mode"}
				</span>
			</label>
		</div>
	);
}

export default Themes;
