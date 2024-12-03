/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:15:17
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 21:16:05
 */
export default function Settinglayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        setting模版
        {children}
      </body>
    </html>
  );
}