import Navbar from "./(routes)/(root)/_components/Navbar";
import SideBar from "./(routes)/(root)/_components/Sidebar";
import FilterCourses from "./_components/Filter";

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
                <FilterCourses />
                {children}
            </main>
        </div>
    )
}