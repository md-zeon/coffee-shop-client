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
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				loader: () => fetch("https://coffee-shop-server-sigma-lime.vercel.app/coffees"),
				Component: Home,
				hydrateFallbackElement: <p>Loading...</p>,
			},
			{
				path: "/add-coffee",
				Component: AddCoffee,
			},
			{
				path: "/update-coffee/:id",
				loader: ({ params }) => fetch(`https://coffee-shop-server-sigma-lime.vercel.app/coffees/${params.id}`),
				Component: UpdateCoffee,
				hydrateFallbackElement: <p>Loading...</p>,
			},
			{
				path: "/coffee/:id",
				loader: ({ params }) => fetch(`https://coffee-shop-server-sigma-lime.vercel.app/coffees/${params.id}`),
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
			{
				path: "/users",
				loader: () => fetch("https://coffee-shop-server-sigma-lime.vercel.app/users"),
				Component: Users,
				hydrateFallbackElement: <p>Loading...</p>,
			}
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
