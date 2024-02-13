import { Button, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";

import { LogIn } from "react-feather";

const navItems = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Features',
        href: '/features'
    },
    {
        title: 'Pricing',
        href: '/pricing'
    },
    {
        title: 'Download',
        href: '/download'
    }
]

export default function Navbar (): JSX.Element {
    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center place-content-center h-navbar px-8">
            <div className={'w-full max-w-content flex items-center justify-between'}>

                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                        src={'/branding/logo.svg'}
                        alt={'Logo'}
                        width={50}
                        height={50}
                        />
                        <Typography variant={'h3'}>battle api</Typography>
                    </Link>
                </div>

                <div className={'flex space-x-4'}>

                    <div className={'flex items-center space-x-0'}>
                        {navItems.map((item, index) => (
                            <Button variant={'ghost'} size={'sm'} href={item.href} key={index}>
                                {item.title}
                            </Button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" size={'sm'} className="">
                            <LogIn size={18} />
                            Login
                        </Button>
                        <Button variant="primary" size={'sm'} className="">
                            Get Started
                        </Button>
                    </div>  
                </div>


            </div>
        </nav>
    )
}