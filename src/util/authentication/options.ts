import NextAuth, { Account, NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

// Providers
import CredentialsProvider from 'next-auth/providers/credentials';

import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '@/types/jwt';
import { ErrorResponse } from '@/types/response';

const handler: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'email-password',
            name: 'email-password',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials) {
                console.log(credentials)
                const res = await fetch('http://127.0.0.1:8000/api/v1/auth/login/', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' },
                });

                const data = await res.json();
                
                console.log('Data:', data);
                
                if (!res.ok) {
                    const errorResponse: ErrorResponse = data as ErrorResponse;
                    throw new Error(errorResponse.code);
                }

                const user = data.user;

                if (res.ok && user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),

        CredentialsProvider({
            id: 'register-email-password',
            name: 'register-email-password',
            credentials: {
                first_name: { label: 'First Name', type: 'text', placeholder: 'First Name' },
                last_name: { label: 'Last Name', type: 'text', placeholder: 'Last Name' },
                email: { label: 'Email', type: 'text', placeholder: 'Email' },
                password1: { label: 'Password', type: 'password', placeholder: 'Password' },
                password2: { label: 'Confirm Password', type: 'password', placeholder: 'Confirm Password' },
            },
            async authorize(credentials) {
                const res = await fetch('http://127.0.0.1:8000/api/v1/auth/registration/', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' },
                });

                const data = await res.json();

                if (!res.ok) {
                    const errorResponse: ErrorResponse = data as ErrorResponse;
                    throw new Error(errorResponse.code);
                }

                const user = data as User;
                console.log('User:', user);
                user.email = credentials && credentials.email;

                if (res.ok && user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],

    pages: {
        signIn: "/account/login",
        newUser: '/account/create',
    },

    callbacks: {
        async jwt({ token, user, account }: { token: JWT; account: Account | null; user: User }) {
            if (user) {
                token.access = user.access;
                token.refresh = user.access;

                const decoded_token = jwtDecode<JwtPayload>(token.access);

                user.id = decoded_token.id as string;
                user.name = decoded_token.name;
                user.email = decoded_token.email;

                token.id = decoded_token.id as string;
                token.name = decoded_token.name;
                token.email = decoded_token.email;

                const expiresIn = decoded_token.exp - decoded_token.iat;

                if (expiresIn) {
                    token.exp = Date.now() + expiresIn * 1000;
                } else {
                    token.exp = Date.now() + 60 * 60;
                }
            }

            // Refresh if token has expired

            if (Date.now() < token.exp * 1000) {
                return token;
            }

            const res = await fetch('http://127.0.0.1:8000/api/v1/auth/refresh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refreshToken: token.refreshToken }),
            });

            const data = await res.json();
            const newToken = data.accessToken;

            token.accessToken = newToken;
            token.refreshToken = data.refreshToken;

            return token;
        },

        async session({ session, token, user }: { session: Session; token: JWT; user: User }) {
            session.access = token.access;
            session.refresh = token.refresh;

            if (user) {
                session.user = user;
            }

            return session;
        },
    },
};

export default handler;