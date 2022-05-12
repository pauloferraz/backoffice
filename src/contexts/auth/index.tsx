import { UserParamsData } from "interfaces/user";
import { createContext, useContext, useEffect, useState } from "react";
import type { UserCredential, User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "firebase-config";

interface AuthContextType {
  loading: boolean;
  currentUser: User | null;
  signup: (data: UserParamsData) => Promise<UserCredential>;
  signin: (data: UserParamsData) => Promise<UserCredential>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signup = ({ email, password }: UserParamsData) => {
    console.log("Criar usuário:", email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = ({ email, password }: UserParamsData) => {
    console.log("Login:", email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("Current:", user);
    });

    return () => unsubscribe();
  }, []);

  const value = { loading, currentUser, signup, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
