/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 20:36:54
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:39:55
 */
export const metadata = {  
  title: '我的metaData标题',  
  description: '这是全局描述',  
}; 

export default function MetaData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div>
      {children}
    </div>
     
  );
}