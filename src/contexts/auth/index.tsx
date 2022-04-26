import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from 'services/auth';

interface AuthContextType {
	user: any;
	signin: (user: string, callback: VoidFunction) => void;
	signout: () => void;
	getCurrentAccount: () => string | null;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<any>(null);
	const navigate = useNavigate();

	const signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
			navigate('/dashboard');
		});
	};

	const signout = () => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			navigate('/');
		});
	};

	const getCurrentAccount = () => {
		return localStorage.getItem('token');
	};

	const value = { user, signin, signout, getCurrentAccount };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
