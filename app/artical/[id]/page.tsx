/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 11:23:34
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 11:57:49
 */
 
import { getPostById, getAllPosts } from '@/lib/artical'

interface Post {  
  id: number;  
  title: string;  
  content: string;  
}  

interface PostPageProps {  
  post: Post;  
} 

export default async function Artical({
  params
}: { params: { id:  string }}) {
  const {id: postId } = await params;  
  const post = await getPostById(postId); 
  
  return (
    <>
      <div>{post?.title}</div>
      <div>{post?.content}</div>
    </>
  )
}

// 这个函数会返回所有需要生成静态路径的参数 
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(item => ({
    id: item.id.toString() // 为每个文章生成一个路径参数 
  }))
}