import "./styles/App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Tour from "./pages/Tour";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route
				index
				element={<Home />}
			/>
            <Route path="/:id" element={<Tour />} />
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
