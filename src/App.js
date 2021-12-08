/* 
	Código creado por Joaquín Soto
	github: https://github.com/SoyJoaquinSoto
	linkedin: https://www.linkedin.com/in/joaquín-soto-de-la-mora-16075a150/
	email: joaquinsotodlm@gmail.com

*/

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
