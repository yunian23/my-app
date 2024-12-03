/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:54:46
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:12:14
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      我是根 dashboard layout
      {children}
    </div>
  );
}