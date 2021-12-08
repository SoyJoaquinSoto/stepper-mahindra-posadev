import { useParams } from "react-router-dom";
import steps from "../steps";

const Step = () => {
	const { id } = useParams();
	const contenido_encontrado = steps.find((step) => step.id === Number(id));
	let contenido = "Step not found!";

	if (contenido_encontrado) {
		contenido = contenido_encontrado.content;
	}

	return (
		<div className="h-full">
			<nav className="h-14 border-b-2 border-gris_mahindra">
				<ul className="flex flex-row gap-0 h-full w-full">
					{steps.map((step) => (
						<li
							key={step.id}
							className={`h-full w-64 text-white text-xl flex items-center pl-4 ${
								step.id === Number(id)
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
					<button className="py-2 px-4 bg-gris_mahindra bg-opacity-70 text-white text-opacity-90 rounded-lg">
						Back
					</button>
					<button className="py-2 px-4 bg-rojo_mahindra text-white rounded-lg">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Step;
