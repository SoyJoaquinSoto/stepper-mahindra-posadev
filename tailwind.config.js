module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rojo_mihandra: "#E21936",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
