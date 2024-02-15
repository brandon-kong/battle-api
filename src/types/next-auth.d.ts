import NextAuth, { Account, DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        access?: Account.accessToken;
        refresh?: Account.refreshToken;
        user: DefaultSession['user'];
    }
}

declare module 'next-auth' {
    interface User {
        access: string;
        refresh: string;
        user: {
            pk: number;
            email: string;
            first_name: string;
            last_name: string;
        }
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        access?: Account.accessToken;
        refresh?: Account.refreshToken;
        exp: number;
        id: string;
    }
}