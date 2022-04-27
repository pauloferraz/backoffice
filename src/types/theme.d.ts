export interface ITheme {
  darkMode: boolean;
  sidebarOpen: boolean;
  userDropDown: boolean;
}
export type ThemeContextType = {
  theme: ITheme;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  iconTheme: () => string;
  toggleUserDropDown: () => void;
};
