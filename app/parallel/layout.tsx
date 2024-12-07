/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 13:53:09
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 14:54:33
 */
import Link from "next/link";


export default function ParallelLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}){
  return <div className="container">
     <div className="flex justify-center text-blue-500 p-6 gap-6">
      <Link href='/parallel'>home</Link>
      <Link href='/parallel/vistors'>vistors</Link>
    </div>
    <div className="flex justify-center align-middle gap-6">
      {analytics}
      {team}
    </div>

    <div className="bg-gray-50 flex-1">{children}</div>
  </div>
}