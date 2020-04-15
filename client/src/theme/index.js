import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			containedPrimary: {
				color: "white"
			},
			containedSecondary: {
				backgroundColor: "#e84545"
			}
		},
		MuiTypography: {
			h4: {
				fontFamily: ["IBM Plex Serif"].join(","),
				fontWeight: "600",
				fontStyle: "italic",
				fontSize: "2.5rem",
				textShadow: "-4px 2px #00000050",
				flexGrow: "1"
			},
			h3: {
				fontFamily: ["Open Sans"].join(","),
				fontWeight: "100",
				fontSize: "1.5rem"
			},
			h2: {
				fontFamily: ["Open Sans"].join(","),
				fontWeight: "200",
				fontSize: "2rem"
			},
			h1: {
				fontFamily: ["IBM Plex Serif"].join(","),
				fontWeight: "600",
				fontStyle: "italic",
				fontSize: "6rem",
				textShadow: "-4px 2px #00000050"
			}
		}
	},
	typography: {
		fontFamily: ["Open Sans"].join(",")
	},
	palette: {
		primary: {
			main: "#36aaba"
		},
		secondary: {
			main: "#e84545"
		}
	}
});
export default theme;
