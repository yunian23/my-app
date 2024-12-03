"use client"

import Link from "next/link";
import { useState } from "react";

/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:54:46
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:34:50
 */
export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count,setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto">
      <h2>Dashboard template {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count+1)}>increment</button>
      {children} 
    </div>
  );
}