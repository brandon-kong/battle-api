import NextAuth, { Account, NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

import { cookies } from 'next/headers';

// Providers
import CredentialsProvider from 'next-auth/providers/credentials';

import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '@/types/jwt';
import { ErrorResponse } from '@/types/response';
import { AdapterUser } from 'next-auth/adapters';

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
                const res = await fetch('http://127.0.0.1:8000/api/v1/auth/login/', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });

                const data = await res.json();
                                
                if (!res.ok) {
                    const errorResponse: ErrorResponse = data as ErrorResponse;
                    throw new Error(errorResponse.code);
                }

                const user = data.user;

                if (res.ok && user) {
                    user.access = data.access;
                    user.refresh = data.refresh;
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
        async jwt({ token, user }: { token: JWT; account: Account | null; user: User | AdapterUser }) {
            if (user) {
                token.access = user.access;
                token.refresh = user.refresh;

                const decoded_token = jwtDecode<JwtPayload>(token.access);

                user.id = Number(decoded_token.user_id);
                user.name = decoded_token.first_name + ' ' + decoded_token.last_name;
                user.email = decoded_token.email;
                token.user_implicit_id = decoded_token.user_implicit_id;
                
                token.jti = decoded_token.jti;
                token.exp = decoded_token.exp;
                token.token_type = decoded_token.token_type;
                token.user_id = decoded_token.user_id;
                token.first_name = decoded_token.first_name;
                token.last_name = decoded_token.last_name;

                token.email = decoded_token.email;

                const expiresIn = decoded_token.exp - decoded_token.iat;
                
                if (expiresIn) {
                    token.exp = Date.now() + expiresIn * 1000;
                } else {
                    token.exp = Date.now() + 60 * 60;
                }
            }

            // call verify token endpoint

            const verifyRes = await fetch('http://127.0.0.1:8000/api/v1/auth/token/verify/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token.access }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success != null && verifyData.success === false) {
                // refresh token

                console.log('refreshing token');
                const refreshRes = await fetch('http://127.0.0.1:8000/api/v1/auth/token/refresh/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ refresh: token.refresh }),
                });

                const refreshData = await refreshRes.json();

                if (refreshData.success && refreshData.success === false) {
                    // if refresh fails, sign out
                    return {
                        ...token,
                        exp: 0,
                    };
                }

                if (refreshRes.ok) {
                    token.access = refreshData.access;
                    token.refresh = refreshData.refresh;
                }
            }

            return token;
        },

        async session({ session, token, user }: { session: Session; token: JWT; user: AdapterUser }) {
            session.access = token.access;
            session.refresh = token.refresh;
            
            session.user = {
                id: token.user_id,
                email: token.email,
                name: token.first_name + ' ' + token.last_name,
            };

            return session;
        },
    },
};

export default handler;