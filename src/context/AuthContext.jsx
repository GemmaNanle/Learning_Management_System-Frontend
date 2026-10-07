import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(
        "learnhub-user"
      );

      const loggedIn = localStorage.getItem(
        "learnhub-logged-in"
      );

      if (savedUser && loggedIn === "true") {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error(
        "Failed to load user:",
        error
      );

      localStorage.removeItem("learnhub-user");
      localStorage.removeItem(
        "learnhub-logged-in"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem(
      "learnhub-user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "learnhub-logged-in",
      "true"
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(
      "learnhub-logged-in"
    );

    setUser(null);
  };

  const updateUser = (updatedUser) => {
    const newUser = {
      ...user,
      ...updatedUser,
    };

    localStorage.setItem(
      "learnhub-user",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}