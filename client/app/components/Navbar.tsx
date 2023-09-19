'use client'
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Popover, PopoverContent, PopoverTrigger, Spinner } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function App() {

    const { data, status } = useSession()
    const path = usePathname()

    const isConnectedContent = (
        <PopoverContent className="w-[240px]">
            <div className="px-1 py-2 w-full space-y-2">
                <p className="text-small font-bold text-foreground">
                    {data?.user?.name}
                </p>
                <div className="flex flex-col gap-2 w-full">
                    <Button color="danger" onClick={() => signOut()} className="hover:bg-red-500">Se déconnecter</Button>
                </div>
            </div>
        </PopoverContent>
    )

    const isNotConnectedContent = (
        <PopoverContent className="w-[240px]">
            <div className="px-1 py-2 w-full space-y-2">
                <p className="text-small font-bold text-foreground">
                    Se connecter
                </p>
                <div className="flex flex-col gap-2 w-full">
                    <Button size="sm" variant="bordered" className="cursor-pointer" onClick={() => signIn('github')}>Github</Button>
                    <Button size="sm" variant="bordered" className="cursor-pointer" onClick={() => signIn('google')}>Google</Button>
                </div>
            </div>
        </PopoverContent>
    )

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">INSO QUIZZ</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={path === '/'}>
                    <Link href="/" color="foreground">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={path === '/quizz'}>
                    <Link href="/quizz" color="foreground">
                        Quizz
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {status === 'loading' ? (
                    <Spinner color="default" />
                ) : (
                    data ? (
                        <Popover
                            showArrow
                            offset={10}
                            placement="bottom"
                            backdrop={"blur"}
                        >
                            <PopoverTrigger>
                                <Avatar isBordered radius="md" src={data?.user?.image as string} />
                            </PopoverTrigger>
                            {isConnectedContent}
                        </Popover>
                    ) : (
                        <Popover
                            showArrow
                            offset={10}
                            placement="bottom"
                            backdrop={"blur"}
                        >
                            <PopoverTrigger>
                                <Button color="primary">Se connecter</Button>
                            </PopoverTrigger>
                            {isNotConnectedContent}
                        </Popover>
                    )
                )}
            </NavbarContent>
        </Navbar>
    );
}
