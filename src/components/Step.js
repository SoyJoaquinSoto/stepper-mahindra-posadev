/* 
	Código creado por Joaquín Soto
	github: https://github.com/SoyJoaquinSoto
	linkedin: https://www.linkedin.com/in/joaquín-soto-de-la-mora-16075a150/
	email: joaquinsotodlm@gmail.com

*/

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

	if (index_paso_encontrado !== -1) {
		contenido = steps[index_paso_encontrado].content;
		if (index_paso_encontrado === steps.length - 1) {
			contenido_btn_sig = "Send";
		}
	}

	const siguiente = () => {
		if (index_paso_encontrado !== -1) {
			if (index_paso_encontrado === steps.length - 1) {
				alert("Finished all steps!");
			} else {
				navigate(`/step/${steps[index_paso_encontrado + 1].id}`);
			}
		} else {
			navigate(`/step/${steps[0].id}`);
		}
	};

	const anterior = () => {
		if (index_paso_encontrado !== -1) {
			navigate(`/step/${steps[index_paso_encontrado - 1].id}`);
		} else {
			navigate(`/step/${steps[0].id}`);
		}
	};

	return (
		<div className="h-full w-full">
			<nav className="h-16 border-b-2 relative border-gris_mahindra">
				<ul className="flex flex-row h-full w-full">
					{steps.map((step, index) => (
						<li
							key={step.id}
							className={`flex items-center pr-16 overflow-hidden relative ${
								step.id === Number(id) && index !== steps.length - 1
									? "bg-gris_mahindra"
									: ""
							} ${index < index_paso_encontrado ? "bg-rojo_mahindra" : ""} ${
								index > index_paso_encontrado && index !== steps.length - 1
									? "bg-gris_mahindra"
									: ""
							}`}
						>
							<div
								className={`h-full w-52 text-white text-xl flex items-center pl-4 ${
									step.id === Number(id) || index < index_paso_encontrado
										? "bg-rojo_mahindra"
										: "bg-gris_mahindra text-opacity-50"
								}`}
							>
								Step {step.id}
							</div>
							<div className="w-16 overflow-hidden inline-block right-0 absolute top-1/2 transform translate -translate-y-1/2">
								<div
									className={`h-20 rotate-45 -mt-2 transform origin-top-left ${
										step.id === Number(id) || index < index_paso_encontrado
											? "bg-rojo_mahindra"
											: "bg-gris_mahindra text-opacity-50"
									}`}
								></div>
							</div>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex flex-col px-6 pb-6 pt-14 -mt-14 h-full">
				<div className="h-5/6 flex justify-center items-center text-gris_mahindra text-xl font-medium">
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
