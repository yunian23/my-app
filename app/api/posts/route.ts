/*
 * @Author: wanglijuan
 * @Date: 2024-12-04 21:14:12
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-04 21:23:49
 */
// app/api/posts/route.ts  
import { NextResponse } from 'next/server';  

const posts = [  
  { id: 1 },
  { id: 2 },  
  { id: 3 },  
];  
; // 模拟一个简单的内存数据库  

export async function POST(request: Request) {
  console.log(request, 'request')  
  const { id } = await request.json();  

  // 在这里通常会调用数据库创建帖子  
  posts.push({ id }); // 模拟创建帖子  
  return NextResponse.json({ id });  
}

// 处理 GET 请求以返回所有帖子  
export async function GET() {  
  return NextResponse.json(posts);  
}  