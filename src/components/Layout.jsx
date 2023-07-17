import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SearchAppBar from "./AppBar";

const Layout = () => (
	<Box>
		<header>
			<SearchAppBar />
		</header>
		<main>
			<Outlet />
		</main>
	</Box>
);

export default Layout;
