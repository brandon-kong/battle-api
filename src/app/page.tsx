import { Button, Typography } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex place-content-center items-center bg-gradient-to-t from-blue-100 to-blue-50 pt-navbar-2x xl:pt-navbar">
            <div
            className={'max-w-content h-min xl:h-[720px] w-full flex flex-col place-content-end'}
            >
                
                <div
                className={'flex flex-col-reverse xl:flex-row w-full place-content-between place-items-center'}
                >

                    <div
                    className={'space-y-4 max-w-xl'}
                    >
                        <Typography variant="h1">
                            battle-testing your application has never been <span className={'text-blue-600'}>easier.</span>
                        </Typography>

                        <div className={'flex flex-col space-y-6'}>
                            <Typography variant="p-large" className={'max-w-xl'}>
                                Get paid for your business — online, in-store, or on-the-go. Platform thousands of businesses trust.
                            </Typography>   
                            
                            <div className={'flex space-x-4'}>
                                <Button variant="primary">Get Started</Button>
                                <Button variant="outline">Contact Sales</Button>
                            </div>
                        </div>
                    </div>

                    <div className={''}>
                        <Image
                        src="/markups/placeholder.png"
                        alt="Hero Image"
                        width={700}
                        height={700}
                        className={'shadow-xl'}
                        />
                    </div>
                </div>

                <div
                className={'py-16 flex w-full place-content-between place-items-center'}
                >

                    <div
                    className={'flex max-w-xl'}
                    >
                        <div>

                        </div>

                        <Typography variant={'p-small'} className={'uppercase font-medium tracking-wide text-gray-800'}>
                            Trusted by over 100,000 
                            <br />
                            businesses worldwide.
                        </Typography>
                    </div>
                </div>

            </div>
        </main>
    );
}
