import { createContext, useEffect, useState } from 'react';
import { ThemeContextType, ITheme } from 'types/theme';

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ITheme>({
		darkMode: false,
		sidebarOpen: false,
		userDropDown: false
	});

	const toggleTheme = () => {
		localStorage.setItem('darkMode', JSON.stringify(!theme.darkMode));
		setTheme({ ...theme, darkMode: !theme.darkMode });
	};

	const toggleSidebar = () => {
		setTheme({ ...theme, sidebarOpen: !theme.sidebarOpen });
	};

	const iconTheme = () => {
		const { darkMode } = theme;
		return darkMode ? 'fa-moon' : 'fa-sun';
	};

	const toggleUserDropDown = () => {
		setTheme({ ...theme, userDropDown: !theme.userDropDown });
	};

	useEffect(() => {
		const storageTheme = localStorage.getItem('darkMode');
		setTheme({ ...theme, darkMode: JSON.parse(storageTheme!) });
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleSidebar,
				toggleTheme,
				iconTheme,
				toggleUserDropDown
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
