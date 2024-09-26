import { Routing } from "pages/index";
import { BrowserRouter } from "react-router-dom";
import "shared/styles";

export const App = () => {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
};
