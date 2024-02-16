'use client';

import { Button, Typography, FormInput, Input } from "@/components";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormValues = {
    email: string;
    password: string;
};

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = 
    useForm<FormValues>();
    
    const onSubmit: SubmitHandler<FormValues> = async (e) => {
        console.log('submitted');

        const res = await signIn('email-password', {
            email: e.email,
            password: e.password,
            callbackUrl: `${window.location.origin}/dashboard`,
            redirect: false,
        })

        if (!res?.ok) {
            console.error('Failed to sign in:', res?.error);
        }
        else {
            router.push('/');
        }
    };

    return (
        <main className="flex place-content-center items-center">
            <div
            className={'max-w-[430px] px-content-padding-x md:px-0 h-screen w-full flex flex-col place-content-center pt-navbar'}
            >
                
                <div
                className={'flex flex-col gap-2'}
                >
                    <Typography variant={'h3'}>
                        Login
                    </Typography>

                    <Typography variant={'p'} className={'text-gray-600'}>
                        Welcome back! Please login to your account.
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4 mt-8'}>
                        <Input variant={'solid'} placeholder={'Email'} {...register("email")} />
                        <Input variant={'solid'} placeholder={'Password'} type={'password'} {...register("password")} />
                        <Button variant="primary">Login</Button>
                        
                        <div
                        className={'flex items-center justify-center gap-1 mb-2'}
                        >
                            <Typography variant={'p-small'} className={'text-gray-600'}>
                                Don&apos;t have an account? 

                            </Typography>                                
                            <Button variant={'link'} href={'/account/create'} className={'ml-1'}>
                                Sign up
                            </Button>
                        </div>

                        <div
                        className={'flex gap-6 items-center w-full text-gray-600 my-2'}
                        >
                            <hr className={'w-full border-gray-200'} />
                            <Typography variant={'p-small'} className={'text-gray-600'}>
                                or
                            </Typography>
                            <hr className={'w-full border-gray-200'} />
                        </div>

                        <Button variant="outline">Login with Google</Button>
                        <Button variant="outline">Login with GitHub</Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
