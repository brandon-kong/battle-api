import { Button, Typography } from "@/components";
import DownloadCard from "@/components/download-card";
import Image from "next/image";

export default function Download() {
    return (
        <main className="flex place-content-center items-center py-navbar-2x">
            <div
            className={'max-w-content-sm w-full flex flex-col'}
            >
                
                <div
                className={'flex w-full'}
                >

                    <div
                    className={'space-y-12 w-full'}
                    >
                        <Image
                        src={'/markups/placeholder-2.webp'}
                        alt={'Hero Image'}
                        width={350}
                        height={350}
                        />

                        <div className={'w-full'}>
                            <Typography variant={'subtitle'}>
                                Download our software
                            </Typography>

                            <Typography variant="h0">
                                battle api is here.
                            </Typography>   
                        </div>

                        <div className={'grid grid-cols-2 gap-6 w-full'}>
                            <DownloadCard 
                            title={'Windows'} 
                            subtitle={'Get the app and start your journey today'} 
                            href={'/download'} 
                            image={'/logos/windows.svg'}
                            />

                            <DownloadCard 
                            title={'Mac'} 
                            subtitle={'Get the app and start your journey today'} 
                            href={'/download'} 
                            image={'/logos/apple.svg'}
                            />

                            <DownloadCard 
                            title={'Linux'} 
                            subtitle={'Get the app and start your journey today'} 
                            href={'/download'} 
                            image={'/logos/linux.svg'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
