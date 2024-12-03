/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:54:46
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:06:14
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2">
      我是根 dashboard layout111
      {children}
    </div>
  );
}