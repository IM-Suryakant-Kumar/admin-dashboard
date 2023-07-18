import { Outlet } from "react-router-dom";
import { Main } from "../styles/layout.sc";
import Header from "./Header";
import Footer from "./Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "light" || "dark",
	},
});

const Layout = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
