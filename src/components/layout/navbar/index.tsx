'use client';

import { Button, Typography } from "@/components";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/components/providers/auth-provider";

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
    const { isAuthenticated, signOut, isLoading, session } = useAuth();

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
                        className={'h-auto aspect-auto'}
                        />
                        <Typography variant={'h4'}>battle api</Typography>
                    </Link>

                   
                </div>

                <div className={'hidden md:flex'}>

                    <div className={'flex items-center space-x-0'}>
                        {navItems.map((item, index) => (
                            <Button variant={'ghost'} size={'sm'} href={item.href} className={item.className} key={index}>
                                {item.title}
                            </Button>
                        ))}
                    </div>
                    
                    {
                        isLoading ? (
                            <div className={'flex items-center space-x-4'}>
                                <Button variant="outline" size={'sm'} className="">
                                    <LogIn size={18} />
                                    Loading...
                                </Button>
                            </div>
                        ) : (
                            !isAuthenticated ? (
                        
                                <div className="flex items-center space-x-4">
                                    <Button href={'/account/login'} variant="outline" size={'sm'} className="">
                                        <LogIn size={18} />
                                        Login
                                    </Button>
                                    <Button href={'/account/create'} variant="primary" size={'sm'} className="">
                                        Get Started
                                    </Button>
                                </div> 
                                )
            
                                : (
                                    <div className="flex items-center">
                                        <Button variant="ghost" size={'sm'} className="">
                                            Dashboard
                                        </Button>
                                        <Popover>
                                            <PopoverTrigger className={'ml-4'}>
                                                <Button size={'sm'} variant={'primary'} className={'hidden md:flex'}>
                                                    Create
                                                    <ChevronDown size={18} />
                                                </Button>
                                            </PopoverTrigger>
                                            
                                            <PopoverContent align={'end'} sideOffset={8} className={'w-max'}>
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

                                        <Button variant="ghost" size={'sm'} className={'ml-4 truncate max-w-sm'} onClick={signOut}
                                        >
                                            { session?.user?.name}
                                        </Button>
                                    </div>
                                )
                            
                        )
                    }
                 
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