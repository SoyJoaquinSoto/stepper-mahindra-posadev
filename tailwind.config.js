module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rojo_mihandra: "#E21936",
				gris_mihandra: "#6D6E70",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
