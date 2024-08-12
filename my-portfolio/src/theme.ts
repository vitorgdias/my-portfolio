import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f7e2e',
        },
    },
    typography: {
        fontFamily: "Helvetiva Neue"
    }
})

theme = responsiveFontSizes(theme)

export default theme