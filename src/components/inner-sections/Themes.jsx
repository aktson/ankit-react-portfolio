import { useState } from "react";

function Themes() {
	const [defaultTheme, setDefaultTheme] = useState("light");
	const [html] = document.getElementsByTagName("html");

	html.setAttribute("data-theme", defaultTheme);
	const changeTheme = (e) => {
		setDefaultTheme(e.target.value);
	};
	return (
		<div className="form-control">
			<div className="input-group">
				<select className="select select-bordered" onChange={changeTheme}>
					<option disabled selected>
						Velg tema
					</option>
					<option>light</option>
					<option>cupcake</option>
					<option>cmyk</option>
					<option>wireframe</option>
					<option>business</option>
					<option>dark</option>
					<option>aqua</option>
				</select>
			</div>
		</div>
	);
}

export default Themes;
