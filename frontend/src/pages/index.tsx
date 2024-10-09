import { Navigate, Route, Routes } from "react-router";
import { SIGN_IN_ROUTE, HOME_ROUTE, BOARD_ROUTE } from "shared/constants/routes";
import SignInPage from "./sign-in-page";
import HomePage from "./home-page";
import { userService } from "entities/user";
import { observer } from "mobx-react-lite";
import BoardPage from "./board-page";

export const Routing = observer(() => {
	return (
		<Routes>
			{userService.isAuth ? (
				<>
					<Route path={HOME_ROUTE} element={<HomePage />} />
					<Route path={BOARD_ROUTE} element={<BoardPage />} />
				</>
			) : (
				<Route path={SIGN_IN_ROUTE} element={<SignInPage />} />
			)}
			<Route
				path="*"
				element={<Navigate to={userService.isAuth ? HOME_ROUTE : SIGN_IN_ROUTE} />}
			/>
		</Routes>
	);
});
