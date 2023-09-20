'use client'
import InsomniakLogo from "@/images/insomniak";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Popover, PopoverContent, PopoverTrigger, Spinner, Spacer } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

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
                <div className="flex flex-col w-full h-full">
                    <GithubLoginButton onClick={() => signIn('github')} size="3rem">Github</GithubLoginButton>
                    <GoogleLoginButton onClick={() => signIn('google')} size="3rem">Google</GoogleLoginButton>
                </div>
            </div>
        </PopoverContent>
    )

    return (
        <Navbar>
            <NavbarBrand>
                <InsomniakLogo height="40" width="40" />
                <Spacer x={2} />
                <p className="font-bold text-inherit">INSO QUIZZ</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={path === '/'}>
                    <Link href="/" color="foreground">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={path === '/quizz'}>
                    <Link href="/quizz" color="foreground" isDisabled={status === 'unauthenticated'}>
                        {status === 'unauthenticated' ? '🔒 Quizz' : 'Quizz'}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={path === '/teachers'}>
                    <Link href="/teachers" color="foreground" isDisabled={status === 'unauthenticated'}>
                        {status === 'unauthenticated' ? '🔒 Teachers' : 'Teachers'}
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
                                <Button size="sm" variant="ghost" color="primary">Se connecter</Button>
                            </PopoverTrigger>
                            {isNotConnectedContent}
                        </Popover>
                    )
                )}
            </NavbarContent>
        </Navbar>
    );
}
