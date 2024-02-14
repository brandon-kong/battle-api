import { Button, Typography } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex place-content-center items-center bg-gradient-to-t from-blue-100 to-blue-50 pt-navbar-2x xl:pt-navbar">
            <div
            className={'max-w-content-xs md:max-w-content px-content-padding-x h-min xl:h-[720px] w-full flex flex-col place-content-end'}
            >
                
                <div
                className={'flex gap-8 flex-col md:flex-col-reverse xl:flex-row-reverse w-full place-content-between md:place-items-start'}
                >

                    <div
                    className={'flex flex-col md:flex-row xl:flex-col gap-6 xl:max-w-xl'}
                    >
                        <Typography variant="h1" className={'md:flex-[.5] w-full xl:w-full'}>
                            battle-testing your application has never been <span className={'text-blue-600'}>easier.</span>
                        </Typography>

                        <div className={'flex flex-col space-y-6 md:flex-[.5] w-full xl:w-full'}>
                            <Typography variant="p-large" className={'max-w-xl'}>
                                Get paid for your business — online, in-store, or on-the-go. Platform thousands of businesses trust.
                            </Typography>   
                            
                            <div className={'flex flex-col md:flex-row gap-4'}>
                                <Button variant="primary">Get Started</Button>
                                <Button variant="outline">Contact Sales</Button>
                            </div>
                        </div>
                    </div>

                    <div className={''}>
                        <Image
                        src="/markups/placeholder.png"
                        alt="Hero Image"
                        width={550}
                        height={550}
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
