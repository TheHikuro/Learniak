'use client';
import InsomniakLogo from "@/images/insomniak";
import { usePathname } from "next/navigation";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const list = [
    {
        title: "Naviger",
        icon: <AiOutlineCompass size={20} />,
        path: "/",
    },
    {
        title: "Dashboard",
        icon: <MdOutlineSpaceDashboard size={20} />,
        path: "/dashboard",
    },
]
export default function SideBar() {

    const pathname = usePathname()

    return (
        <div className="text-gray-700 h-screen w-64 fixed top-0 left-0 overflow-y-auto border-r">
            <div className="p-4 flex items-center space-x-5 border-b shadow-sm">
                <InsomniakLogo width="47" height="47" />
                <h2 className="text-2xl font-semibold">Learniak</h2>
            </div>
            <nav className="flex flex-col justify-between">
                <ul>
                    {list.map((item, index) => (
                        <div key={index} className={`flex hover:bg-blue-100 cursor-pointer justify-between ${pathname === item.path && 'bg-blue-100'}`}>
                            <li className="p-4 flex items-center space-x-2">
                                <div>
                                    {item.icon}
                                </div>
                                <h2>
                                    {item.title}
                                </h2>
                            </li>
                            {pathname === item.path && (
                                <div className="bg-blue-500 w-1 h-16" />
                            )}
                        </div>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
