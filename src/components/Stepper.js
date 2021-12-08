import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Step from "./Step.js";

function Stepper(props) {
	return (
		<Router>
			<div className="border-2 border-gris_mahindra h-full flex flex-col">
				<Routes>
					<Route path="/step/:id" element={<Step />} />
					<Route path="*" element={<Navigate to="/step/1" />} />
				</Routes>
			</div>
		</Router>
	);
}

export default Stepper;
