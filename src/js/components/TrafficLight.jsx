import React, { useState } from "react";

const TrafficLight = () => {

	const text = {
		default: "Selecciona un color:",
		green: "Siga adelante, vía libre.",
		yellow: "Precaución, prepárese para detenerse.",
		red: "Alto! prohibido el paso."
	}

	const [color, setColor] = useState("");
	const [alert, setAlert] = useState(text.default);

	return (
		<div className="traffic-light-container">
			<p className={`alert ${color}`}>
				{alert}
			</p>
			<div className="pole"></div>
			<div className="traffic-light">
				<div
					onClick={() => { setColor("green"); setAlert(text.green) }}
					className={`light green ${color === "green" ? "glow" : ""}`}
				></div>
				<div
					onClick={() => { setColor("yellow"); setAlert(text.yellow) }}
					className={`light yellow ${color === "yellow" ? "glow" : ""}`}
				></div>
				<div
					onClick={() => { setColor("red"); setAlert(text.red) }}
					className={`light red ${color === "red" ? "glow" : ""}`}
				></div>
			</div>
		</div >
	);
};

export default TrafficLight;