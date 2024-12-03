/*
 * @Author: wanglijuan
 * @Date: 2024-11-28 21:21:44
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-03 21:09:07
 */


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
