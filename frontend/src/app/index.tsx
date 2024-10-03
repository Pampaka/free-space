import { userService } from "entities/user";
import { Routing } from "pages/index";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "shared/styles";
import { Loader } from "shared/ui/loader";
import { useTheme } from "shared/ui/theme-toggle";

export const App = () => {
	useTheme();

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		userService
			.refresh()
			.catch(() => {})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
};
