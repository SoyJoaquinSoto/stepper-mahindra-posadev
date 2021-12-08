/* 
	Código creado por Joaquín Soto
	github: https://github.com/SoyJoaquinSoto
	linkedin: https://www.linkedin.com/in/joaquín-soto-de-la-mora-16075a150/
	email: joaquinsotodlm@gmail.com

*/

function Header() {
	return (
		<div className="flex flex-row items-end justify-start gap-20 pl-4 pt-4">
			<img
				className="w-1/5"
				src="/mahindra.png"
				alt="Logo de Tech Mahindra; 'Tech' en fuente gris en la parte superior y 'Mahindra' en la inferior con fuente roja"
			/>
			<h1 className="text-rojo_mahindra font-semibold text-2xl pb-2">
				Stepper - Frontend Coding Challenge
			</h1>
		</div>
	);
}

export default Header;
