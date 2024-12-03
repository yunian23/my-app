/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:15:17
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 21:17:58
 */

export default function Settinglayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      setting模版
      {children}
    </div>
  );
}