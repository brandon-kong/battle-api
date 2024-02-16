'use client';

import { useQuery } from '@tanstack/react-query';
import { useContext, createContext, ReactNode } from 'react';
import type { Session } from 'next-auth';

import { getSession } from 'next-auth/react';

import { signIn, signOut } from 'next-auth/react';

import type { SignOutParams, SignInOptions, SignInResponse, LiteralUnion } from 'next-auth/react';
import type { BuiltInProviderType } from 'next-auth/providers/index';

type AuthContextType = {
    session: Session | null | undefined;
    isAuthenticated: boolean;
    isLoading: boolean;

    signIn: typeof signIn;
    signOut: typeof signOut;
};

const AuthContext = createContext<AuthContextType>({
    session: null,
    isAuthenticated: false,
    isLoading: true,

    signIn,
    signOut,
});

const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
    children?: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { data: session, isLoading, refetch } = useQuery<Session | null>({
        queryKey: ['session'],
        queryFn: () => getSession(),
    });

    const newSignIn = async (provider?: LiteralUnion<BuiltInProviderType>, options?: SignInOptions) => {
        try {
            const response = await signIn(provider, options);
            refetch();

            return response;
        } catch (e) {
            return;
        }
    };

    const newSignOut = async (params?: SignOutParams) => {
        try {
            const response = await signOut(params);
            refetch();

            return response;
        } catch (e) {
            return;
        }
    };

    return (
        <AuthContext.Provider
        value={{
            session,
            isAuthenticated: !!session,
            isLoading,
            signIn: newSignIn as typeof signIn,
            signOut: newSignOut as typeof signOut,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default useAuth;

export { useAuth }
export type { AuthContextType }