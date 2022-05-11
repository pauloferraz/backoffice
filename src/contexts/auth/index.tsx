import { UserParamsData } from "interfaces/user";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuthProvider } from "services/auth";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "firebase-config";

interface AuthContextType {
  user: any;
  signup: (data: UserParamsData) => Promise<UserCredential>;
  signin: (user: string, callback: VoidFunction) => void;
  signout: () => void;
  getCurrentAccount: () => string | null;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const signup = ({ email, password }: UserParamsData) => {
    console.log("Criar usuário:", email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
      navigate("/dashboard");
    });
  };

  const signout = () => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      navigate("/");
    });
  };

  const getCurrentAccount = () => {
    return localStorage.getItem("token");
  };

  const value = { user, signup, signin, signout, getCurrentAccount };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
