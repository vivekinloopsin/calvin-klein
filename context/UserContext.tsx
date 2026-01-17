"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    login: (email: string, pass: string) => Promise<boolean>;
    register: (data: any) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = async (email: string, pass: string) => {
        // Simulating login with the specific credentials provided
        if (email === 'fionnapink@airsworld.net' && pass === '8078@Prime') {
            setUser({ name: 'test', email }); // Name 'test' from screenshot
            return true;
        }
        // Allow any other valid-looking email for demo purposes if they just registered
        if (email.includes('@')) {
            setUser({ name: email.split('@')[0], email });
            return true;
        }
        return false;
    };

    const register = async (data: any) => {
        setUser({ name: data.firstName, email: data.email });
        return true;
    };

    const logout = () => {
        setUser(null);
        router.push('/');
    };

    return (
        <UserContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
