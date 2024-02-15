'use client';

import { Button, Typography, FormInput } from "@/components";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = 
    useForm<FormValues>();
    
    const onSubmit: SubmitHandler<FormValues> = (e) => {
        console.log('submitted');
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
                        Create an account
                    </Typography>

                    <Typography variant={'p'} className={'text-gray-600'}>
                        Welcome! Please create an account to get started.
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4 mt-8'}>
                        <div className={'flex gap-4 w-full'}>
                            <FormInput 
                            variant={'solid'} 
                            placeholder={'First Name'} 
                            {...register("firstName")} 
                            className={'w-full'}
                            />
                            <FormInput 
                            variant={'solid'} 
                            placeholder={'Last Name'} 
                            {...register("lastName")} 
                            className={'w-full'}
                            />
                        </div>
                        <FormInput variant={'solid'} placeholder={'Email'} {...register("email")} />
                        <FormInput variant={'solid'} placeholder={'Password'} type={'password'} {...register("password")} />
                        <FormInput variant={'solid'} placeholder={'Confirm Password'} type={'password'} {...register("confirmPassword")} />
                        <Button variant="primary">Create account</Button>
                        
                        <div
                        className={'flex items-center justify-center gap-1 mb-2'}
                        >
                            <Typography variant={'p-small'} className={'text-gray-600'}>
                                Already have an account? 

                            </Typography>                                
                            <Button variant={'link'} href={'/account/login'} className={'ml-1'}>
                                Sign in
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
