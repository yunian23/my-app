"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:54:46
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:34:12
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count,setCount] = useState(0)
  const pathName = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        <Link className={pathName === '/dashboard/about' ? ' text-purple-500' : ''} href="/dashboard/about">about</Link>
        <Link className={pathName === '/dashboard/settings' ? ' text-purple-500' : ''} href="/dashboard/settings">settings</Link>
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count+1)}>increment</button>
      {children}
    </div>
  );
}