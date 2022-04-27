export interface ITheme {
  darkMode: boolean;
  sidebarOpen: boolean;
}
export type ThemeContextType = {
  theme: ITheme;
  iconTheme: () => string;
  toggleTheme: () => void;
  toggleSidebar: () => void;
};
