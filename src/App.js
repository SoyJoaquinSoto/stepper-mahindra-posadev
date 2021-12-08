import Header from "./layout/Header";
import Stepper from "./components/Stepper";

function App() {
	return (
		<div className="flex flex-col gap-8 h-screen p-2">
			<Header />
			<Stepper />
		</div>
	);
}

export default App;
