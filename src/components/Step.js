import { useParams } from "react-router-dom";
import steps from "../steps";

const Step = () => {
	const { id } = useParams();
	const contenido_encontrado = steps.find((step) => step.id === Number(id));
	let contenido = "Step not found!";

	if (contenido_encontrado) {
		contenido = contenido_encontrado.content;
	}

	return <div>{contenido}</div>;
};

export default Step;
