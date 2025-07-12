
import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  location?: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  session: any | null;
  loading: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  resendConfirmationEmail: (email: string) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: { [key: string]: { password: string; user: User } } = {
  'admin@rewear.com': {
    password: 'admin123',
    user: {
      id: 'admin-1',
      email: 'admin@rewear.com',
      first_name: 'Admin',
      last_name: 'User',
      location: 'New York'
    }
  },
  'user@rewear.com': {
    password: 'user123',
    user: {
      id: 'user-1',
      email: 'user@rewear.com',
      first_name: 'Demo',
      last_name: 'User',
      location: 'Los Angeles'
    }
  },
  'test@rewear.com': {
    password: 'testpassword123',
    user: {
      id: 'test-1',
      email: 'test@rewear.com',
      first_name: 'Test',
      last_name: 'User',
      location: 'San Francisco'
    }
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('rewear_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setSession({ user: userData });
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    // Simulate signup delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    if (mockUsers[email]) {
      return { error: { message: 'User already exists' } };
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      first_name: firstName,
      last_name: lastName
    };

    mockUsers[email] = { password, user: newUser };
    
    // Auto-login after signup
    setUser(newUser);
    setSession({ user: newUser });
    localStorage.setItem('rewear_user', JSON.stringify(newUser));
    
    return { error: null };
  };

  const signIn = async (email: string, password: string) => {
    console.log('Attempting to sign in with email:', email);
    
    // Simulate signin delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData = mockUsers[email];
    
    if (!userData || userData.password !== password) {
      console.log('Sign in result: Invalid credentials');
      return { error: { message: 'Invalid email or password' } };
    }

    console.log('Sign in result: Success');
    setUser(userData.user);
    setSession({ user: userData.user });
    localStorage.setItem('rewear_user', JSON.stringify(userData.user));
    
    return { error: null };
  };

  const signOut = async () => {
    setUser(null);
    setSession(null);
    localStorage.removeItem('rewear_user');
  };

  const resendConfirmationEmail = async (email: string) => {
    console.log('Attempting to resend confirmation email to:', email);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Resend confirmation result: Success (mock)');
    return { error: null };
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signUp,
      signIn,
      signOut,
      resendConfirmationEmail,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
