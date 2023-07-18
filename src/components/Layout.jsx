import { Outlet } from "react-router-dom";
import { Container, Main } from "../styles/layout.sc";
import Header from "./Header";
import Footer from "./Footer";
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
			{/* <Footer /> */}
		</Container>
	);
};

export default Layout;
