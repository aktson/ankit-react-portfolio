import { useState } from "react";

function Themes({ isChecked, setIsChecked }) {
	const [defaultTheme, setDefaultTheme] = useState("dark");
	const [html] = document.getElementsByTagName("html");

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
		<div className="form-control w-36" style={{ zIndex: "251" }}>
			<label className="cursor-pointer label flex gap-1 sm:gap-0">
				<input type="checkbox" className="toggle toggle-primary bg-primary border-primary" onClick={changeTheme} checked={isChecked} />
				<span className="label-text text-primary">{isChecked ? "Light Mode" : "Dark Mode"}</span>
			</label>
		</div>
	);
}

export default Themes;
