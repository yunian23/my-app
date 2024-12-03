/*
 * @Author: wanglijuan
 * @Date: 2024-11-28 21:21:44
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 22:11:42
 */
import 'tailwindcss/tailwind.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        根模版
        {children}
      </body>
    </html>
  );
}
