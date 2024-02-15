import { Button, Typography } from "@/components";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import Image from "next/image";
import Link from "next/link";

import { ChevronDown, LogIn, Menu, Plus, Tv } from "react-feather";

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

                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                        src={'/branding/logo.svg'}
                        alt={'Logo'}
                        width={50}
                        height={50}
                        />
                        <Typography variant={'h4'}>battle api</Typography>
                    </Link>

                    <Popover>
                        <PopoverTrigger className={'ml-4'} asChild>
                            <Button size={'sm'} variant={'ghost'} className={'hidden md:flex'}>
                                Create
                                <ChevronDown size={18} />
                            </Button>
                        </PopoverTrigger>
                        
                        <PopoverContent align={'start'} sideOffset={8} className={'w-max'}>
                            <div className={'flex flex-col gap-2'}>
                                <Button variant={'ghost-gray'} size={'sm'} href={'#'} 
                                className={'rounded-lg text-blue-500 justify-start'}
                                >
                                    Create new application

                                    <div className={'h-6 w-6 rounded bg-blue-100 flex items-center justify-center'}>
                                        <Plus size={18} />
                                    </div>
                                </Button>

                                <hr className={'border-gray-200'} />

                                <Button variant={'ghost-gray'} size={'sm'} href={'#'}
                                className={'rounded-lg justify-start'}
                                >
                                    Create new endpoint

                                    <div className={'h-6 w-6 rounded bg-gray-100 flex items-center justify-center'}>
                                        <Plus size={18} />
                                    </div>
                                </Button>

                                <Button variant={'ghost-gray'} size={'sm'} href={'#'} 
                                className={'rounded-lg justify-start'}
                                >
                                    Monitor your API

                                    <div className={'h-6 w-6 rounded bg-gray-100 flex items-center justify-center'}>
                                        <Tv size={18} />
                                    </div>
                                </Button>

                                <hr className={'border-gray-200'} />

                                <Button variant={'ghost-gray'} size={'sm'} href={'#'}
                                className={'rounded-lg justify-start'}
                                >
                                    Create new team

                                    <div className={'h-6 w-6 rounded bg-gray-100 flex items-center justify-center'}>
                                        <Plus size={18} />
                                    </div>
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
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
                        <Button href={'/login'} variant="outline" size={'sm'} className="">
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