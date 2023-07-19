import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import "./App.css";
import Users from "./pages/Users";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";

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
				<Route
					path="new"
					element={<NewUser />}
				/>
			</Route>
			<Route path="products">
				<Route
					index
					element={<Products />}
				/>
				<Route
					path=":id"
					element={<h1>Product</h1>}
				/>
				<Route
					path="new"
					element={<h1>New Product</h1>}
				/>
			</Route>
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
