'use client'

import { Button, Avatar, Popover, PopoverContent, PopoverTrigger, Spinner, Input } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { BsSearch } from "react-icons/bs";

export default function App() {

    const { data, status } = useSession()

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
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm justify-between">
            <div>
                <Input
                    type="text"
                    placeholder="Chercher votre cours ici !"
                    startContent={
                        <BsSearch size={20} />
                    }
                />
            </div>
            <div>
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
            </div>
        </div>
    );
}
