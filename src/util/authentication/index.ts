'use server';

import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import AuthOptions from "./options";

export const getAuthentication = async () => {
  const session = await auth();
  return session;
};

export const getAccessToken = async () => {
    const session = await auth();
    return session?.access;
};

export async function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, AuthOptions);
}