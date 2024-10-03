import { observer } from "mobx-react-lite";
import { Themes, themeService } from "./model";

export const ThemeToggle = observer(() => {
	return (
		<input
			type="checkbox"
			checked={themeService.theme === Themes.DARK}
			onChange={() => themeService.changeTheme()}
		/>
	);
});
