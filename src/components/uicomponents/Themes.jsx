import { useState } from "react";

function Themes() {
	const [defaultTheme, setDefaultTheme] = useState("dark");
	const [html] = document.getElementsByTagName("html");

	const [isChecked, setIsChecked] = useState(true);

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
		<div className="form-control">
			<div className="form-control w-36">
				<label className="cursor-pointer label">
					<input type="checkbox" className="toggle toggle-primary bg-primary border-primary" onClick={changeTheme} checked={isChecked} />
					<span className="label-text text-primary">{isChecked ? "Light Mode" : "Dark Mode"}</span>
				</label>
			</div>
		</div>
	);
}

export default Themes;
