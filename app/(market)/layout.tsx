/*
 * @Author: wanglijuan
 * @Date: 2024-12-04 22:11:17
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-04 22:12:32
 */
export default function marketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      market模版
      {children}
    </div>
  );
}