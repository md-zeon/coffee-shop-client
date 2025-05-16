import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				loader: () => fetch("http://localhost:3000/coffees"),
				Component: Home,
				hydrateFallbackElement: <p>Loading...</p>,
			},
			{
				path: "/add-coffee",
				Component: AddCoffee,
			},
			{
				path: "/update-coffee/:id",
				loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
				Component: UpdateCoffee,
				hydrateFallbackElement: <p>Loading...</p>,
			},
			{
				path: "/coffee/:id",
				loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
				Component: CoffeeDetails,
				hydrateFallbackElement: <p>Loading...</p>,
			},
			{
				path: "/sign-in",
				Component: SignIn,
			},
			{
				path: "/sign-up",
				Component: SignUp,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>,
);
