const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
  	enabled: true,
  	content: [
  		"./*.html",
  		"./2021/*.html"
  	]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			blsRed: "#a91c2b",
			blsYellow: "#f8b133",
			blsAmber: "#e19213",
			blsBlue: "#0095bf",
			blsLBlue: "#63c4de",
			blsGraphite: "#595959",
			blsKey: "#111111",
			blsWhite: "#ffffff",
			smuBlue: "#151e52",
			smuGold: "#867151",
			smuViolet: "#2d0a62"
    	}
	}, 
  },
  variants: {
    extend: {},
  },
  plugins: [
  	require('@tailwindcss/forms'),
  	require('@tailwindcss/aspect-ratio'),
  ],
}
