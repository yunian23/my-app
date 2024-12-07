/*
 * @Author: wanglijuan
 * @Date: 2024-12-03 21:58:39
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-04 21:05:10
 */
'use client'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div>
       <button type="button" onClick={() => router.push('/dashboard/about')}>
        Dashboard
      </button>
    </div>
  );
}