import { Button, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";

import { LogIn, Menu } from "react-feather";

const navItems = [
    {
        title: 'Features',
        href: '/features',
        className: 'hidden lg:flex'
    },
    {
        title: 'Pricing',
        href: '/pricing'
    },
    {
        title: 'Download',
        href: '/download',
        className: 'hidden lg:flex'
    }
]

export default function Navbar (): JSX.Element {
    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center place-content-center h-navbar px-content-padding-x">
            <div className={'w-full max-w-content-xs md:max-w-content flex items-center justify-between'}>

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

                <div className={'space-x-4 hidden md:flex'}>

                    <div className={'flex items-center space-x-0'}>
                        {navItems.map((item, index) => (
                            <Button variant={'ghost'} size={'sm'} href={item.href} className={item.className} key={index}>
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

                <div className={'md:hidden'}>
                    <Button variant={'ghost'} size={'icon'}>
                        <Menu size={18} />
                    </Button>
                </div>


            </div>
        </nav>
    )
}