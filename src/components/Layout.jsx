import { Outlet } from "react-router-dom";
import { Container, Main } from "../styles/layout.sc";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<Container>
			<Header />
			<Main
				direction="row"
				component="main"
			>
				<Sidebar />
				<Outlet />
			</Main>
		</Container>
	);
};

export default Layout;
