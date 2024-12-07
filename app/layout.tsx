/*
 * @Author: wanglijuan
 * @Date: 2024-11-28 21:21:44
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:35:31
 */
import 'tailwindcss/tailwind.css'

export const metadata = {  
  title: '我的全局标题',  
  description: '这是全局描述',  
};  

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
