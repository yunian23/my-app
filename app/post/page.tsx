/*
 * @Author: wanglijuan
 * @Date: 2024-12-04 21:19:32
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-04 22:26:33
 */
"use client"; // 标记为客户端组件，允许使用 React hooks  

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
interface IPost {
  id: number,
}

const PostsPage = () => {  
  // 定义状态以存储帖子数据  
  const [posts, setPosts] = useState<IPost[]>([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState<string | null>(null);  
  const router = useRouter();

  // 使用 useEffect 获取帖子数据  
  useEffect(() => {  
    const fetchPosts = async () => {  
      try {  
        const response = await fetch('/api/posts');  
        if (!response.ok) {  
          throw new Error('网络响应错误');  
        }  
        const data = await response.json();  
        setPosts(data);  
      } catch (err: unknown) { // 将 err 的类型指定为 unknown  
        setError('发生了未知错误') 
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchPosts();  
  }, []); // 仅在组件挂载时调用  

  // 渲染页面内容  
  if (loading) return <div>加载中...</div>;  
  if (error) return <div>错误：{error}</div>;  

  return (  
    <div>  
      <h1>所有帖子</h1>  
      {posts.length === 0 ? (  
        <p>没有找到帖子。</p>  
      ) : (  
        <ul>  
          {posts.map((post) => (  
            <li key={post.id}>  
              <h2 onClick={() => router.push(`/post/${post.id}`) }>帖子{post.id}</h2>
            </li>  
          ))}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default PostsPage;  