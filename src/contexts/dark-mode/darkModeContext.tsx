import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

type InitialStateType = {
	darkMode: boolean;
};

const INITIAL_STATE = {
	darkMode: false
};

export const DarkModeContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({
	state: INITIAL_STATE,
	dispatch: () => null
});

export const DarkModeContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (
		<DarkModeContext.Provider value={{ state, dispatch }}>
			{children}
		</DarkModeContext.Provider>
	);
};
