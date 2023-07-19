import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import "./App.css";
import Users from "./pages/Users";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route path="users">
				<Route
					index
					element={<Users />}
				/>
				<Route
					path=":id"
					element={<User />}
				/>
			</Route>
            <Route path="new-user" element={<NewUser />} />
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
