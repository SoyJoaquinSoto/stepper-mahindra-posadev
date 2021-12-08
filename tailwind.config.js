/* 
	Código creado por Joaquín Soto
	github: https://github.com/SoyJoaquinSoto
	linkedin: https://www.linkedin.com/in/joaquín-soto-de-la-mora-16075a150/
	email: joaquinsotodlm@gmail.com

*/

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rojo_mahindra: "#E21936",
				gris_mahindra: "#6D6E70",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
