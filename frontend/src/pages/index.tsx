import { Route, Routes } from "react-router";
import { AUTH_ROUTE, HOME_ROUTE } from "shared/constants/routes";
import SignInPage from "./sign-in-page";
import HomePage from "./home-page";

export const Routing = () => {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />} />
			<Route path={AUTH_ROUTE} element={<SignInPage />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
};
