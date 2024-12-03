import Link from "next/link";

/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:54:46
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:16:45
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4 text-purple">
        <Link href="/dashboard/about">about</Link>
        <Link href="/dashboard/settings">settings</Link>
      </div>
      {children}
    </div>
  );
}