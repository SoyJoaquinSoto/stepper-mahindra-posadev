import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from "./Step.js";

function Stepper(props) {
	return (
		<Router>
			<div className="border-2 border-gris_mahindra h-full flex flex-col">
				<Routes>
					<Route path="/step/:id" element={<Step />} />
				</Routes>
			</div>
		</Router>
	);
}

export default Stepper;
