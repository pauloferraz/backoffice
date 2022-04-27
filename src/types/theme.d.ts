export interface ITheme {
	darkMode: boolean;
	sidebarOpen: boolean;
}
export type ThemeContextType = {
	theme: ITheme;
	toggleTheme: () => void;
	toggleSidebar: () => void;
};
