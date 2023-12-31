import Navbar from "./_components/Navbar";
import SideBar from "./_components/Sidebar";

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-64 fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fixxed inset-y-0 z-50">
                <SideBar />
            </div>
            <main className="md:pl-64 pt-[80px] h-full">
                {children}
            </main>
        </div>
    )
}