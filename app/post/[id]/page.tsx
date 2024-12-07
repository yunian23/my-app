/*
 * @Author: wanglijuan
 * @Date: 2024-12-04 21:18:10
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-04 22:27:07
 */
// app/post/[id]/page.tsx  
export default async function PostPage({ params }: { params: { id: number }}) {  
  const { id } = await params;  
  
  return (  
    <div>  
      <h1>Post Details</h1>  
      <p>Post ID: {id}</p>  
    </div>  
  );  
}  