"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react'

interface ISubItem {
    name: string;
    path: string;
}

function SubmenuItem({ item }: { item: ISubItem }) {
    const { name, path } = item

    const router = useRouter()

    const goToPage = () => {
        router.push(path)
    }

    const pathname = usePathname();

    const isActiveMenu = useMemo(() => {
        return path === pathname
    }, [path, pathname])

    return (
        <div className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer ${isActiveMenu && "text-sidebar-active font-semibold"}`}
            onClick={goToPage}>
            {name}
        </div>
    )
}

export default SubmenuItem