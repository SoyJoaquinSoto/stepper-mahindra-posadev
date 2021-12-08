import { useParams, useNavigate } from "react-router-dom";
import steps from "../steps";

const Step = () => {
	let navigate = useNavigate();
	const { id } = useParams();
	const index_paso_encontrado = steps.findIndex(
		(step) => step.id === Number(id)
	);
	let contenido = "Step not found!";
	let contenido_btn_sig = "Next";

	if (index_paso_encontrado || index_paso_encontrado === 0) {
		contenido = steps[index_paso_encontrado].content;
		if (index_paso_encontrado === steps.length - 1) {
			contenido_btn_sig = "Send";
		}
	}

	const siguiente = () => {
		if (index_paso_encontrado || index_paso_encontrado === 0) {
			if (index_paso_encontrado === steps.length - 1) {
				alert("Finished all steps!");
			} else {
				navigate(`/step/${steps[index_paso_encontrado + 1].id}`);
			}
		}
	};

	const anterior = () => {
		if (index_paso_encontrado) {
			navigate(`/step/${steps[index_paso_encontrado - 1].id}`);
		}
	};

	return (
		<div className="h-full">
			<nav className="h-14 border-b-2 border-gris_mahindra">
				<ul className="flex flex-row gap-0 h-full w-full">
					{steps.map((step, index) => (
						<li
							key={step.id}
							className={`h-full w-64 text-white text-xl flex items-center pl-4 ${
								step.id === Number(id) || index < index_paso_encontrado
									? "bg-rojo_mahindra"
									: "bg-gris_mahindra text-opacity-50"
							}`}
						>
							Step {step.id}
						</li>
					))}
				</ul>
			</nav>
			<div className="flex flex-col px-6 pb-6 pt-14 -mt-14 h-full">
				<div className="h-5/6 flex justify-center items-center text-gris_mahindra text-lg font-medium">
					{contenido}
				</div>
				<div className="h-1/6 flex flex-row justify-between items-center">
					<button
						className="py-2 px-4 bg-gris_mahindra bg-opacity-70 text-white text-opacity-90 rounded-lg"
						onClick={anterior}
						disabled={!index_paso_encontrado}
					>
						Back
					</button>
					<button
						className="py-2 px-4 bg-rojo_mahindra text-white rounded-lg"
						onClick={siguiente}
					>
						{contenido_btn_sig}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Step;
