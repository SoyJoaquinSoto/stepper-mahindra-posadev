import { useParams } from "react-router-dom";

const Step = () => {
	let { id } = useParams();
	return <div>{id}</div>;
};

export default Step;
