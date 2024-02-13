import Image from 'next/image'
import { Button, Typography } from '..'

import { ArrowRight } from 'react-feather'

type DownloadCardProps = {
    title: string;
    subtitle: string;
    href: string;
    image: string;
}

export default function DownloadCard ({ title, subtitle, href, image }: DownloadCardProps): JSX.Element {
    return (
        <div className="w-full border rounded-lg p-6 flex flex-col items-start space-y-8">
            <Image
            src={image}
            alt={'Download Illustration'}
            width={50}
            height={50}
            className={'opacity-70'}
            />
            <div
            className={'space-y-4'}
            >   
                <div className={'space-y-2'}>
                    <Typography variant={'h4'}>{ title }</Typography>         
                    <Typography variant={'p'} className={'text-gray-500'}>{ subtitle }</Typography>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <Typography variant={'p'} className={'text-blue-500 font-semibold'}>Download</Typography>
                    <ArrowRight size={22} className={'stroke-blue-500'} />
                </div>
            </div>

        </div>
    )
}