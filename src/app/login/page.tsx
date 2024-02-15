import { Button, Input, Typography } from "@/components";
import Image from "next/image";

export default function Login() {
    return (
        <main className="flex place-content-center items-center">
            <div
            className={'max-w-[450px] px-content-padding-x xl:px-0 h-screen w-full flex flex-col place-content-center'}
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

                    <form className={'flex flex-col gap-4 mt-8'}>
                        <Input variant={'solid'} placeholder={'Email'} />
                        <Input variant={'solid'} placeholder={'Password'} type={'password'} />
                        <Button variant="primary">Login</Button>
                        
                        <div
                        className={'flex items-center justify-start gap-1 mb-2'}
                        >
                            <Typography variant={'p-small'} className={'text-gray-600'}>
                                Don&apos;t have an account? 

                            </Typography>                                
                            <Button variant={'link'} href={'#'} className={'ml-1'}>
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
