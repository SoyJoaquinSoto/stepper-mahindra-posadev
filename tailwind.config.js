module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rojo_mahindra: "#E21936",
				gris_mahindra: "#6D6E70",
			},
			borderWidth: {
				12: "3.5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
