/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 11:33:55
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 11:56:56
 */

export interface Post {  
  id: number;  
  title: string;  
  content: string;  
}  

export async function getAllPosts(): Promise<Post[]> {  
  // 这里可以是从数据库中读取内容的逻辑  
  return [  
    { id: 1, title: 'Post 1', content: 'Content of post 1' },  
    { id: 2, title: 'Post 2', content: 'Content of post 2' },  
    // 更多文章...  
  ];  
}  

export async function getPostById(id: string): Promise<Post | null> {  
  const posts = await getAllPosts();  
  return posts.find(post => post.id === parseInt(id)) || null;  
} 