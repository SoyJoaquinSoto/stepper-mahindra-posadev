import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Step from "./Step.js";
import steps from "../steps";

function Stepper(props) {
	return (
		<div className="border-2 border-gris_mahindra h-full">
			<Router>
				<div>
					<nav>
						<ul>
							{steps.map((step) => (
								<li key={step.id}>
									<Link to={"step/" + step.id}>Step {step.id}</Link>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						<Route path="/step/:id" element={<Step />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default Stepper;
