"use client"
import { LayoutDashboard, LucideIcon } from 'lucide-react';
import SidebarItems from './item';

interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}
const items: ISidebarItem[] = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        name: "Page 1",
        icon: LayoutDashboard,
        path: "/page1"
    },
    {
        name: "Page 2",
        icon: LayoutDashboard,
        path: "/page2",
        items: [
            {
                name: "Submenu 1",
                path: "/page2/sub1"
            },
            {
                name: "Submenu 2",
                path: "/page2/sub2"
            }
        ]
    },
    {
        name: "Page 3",
        icon: LayoutDashboard,
        path: "/page3"
    }
]

function Sidebar() {
    return (
        <div
            className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4'
        >
            <div className='flex flex-col space-y-10 w-full'>
                <h1>Website</h1>
                <div>
                    {items.map((item) => (
                        <SidebarItems key={item.path} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar