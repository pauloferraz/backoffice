import { createContext, useState } from 'react';
import { ThemeContextType, ITheme } from 'types/theme';

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ITheme>({
		darkMode: false,
		sidebarOpen: false
	});

	const iconTheme = () => {
		const { darkMode } = theme;
		return darkMode ? 'fa-moon' : 'fa-sun';
	};

	const toggleTheme = () => {
		setTheme({ ...theme, darkMode: !theme.darkMode });
	};

	const toggleSidebar = () => {
		setTheme({ ...theme, sidebarOpen: !theme.sidebarOpen });
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleSidebar, toggleTheme, iconTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
