/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 19:43:21
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:18:24
 */
import Image  from 'next/image';
import { list } from '@/lib/data'

export default async function PhotoDetailPage({ params }: { params: { id: string }}) {
  const { id } = await params;
  const photo = list.find(item => item.id === +id)

  return (
    <div className='flex justify-center items-center fixed inset-8 bg-gray-500/[.8]'>
      <Image src={photo?.imageUrl!}  width={300} height={300} alt={photo?.alt!}/>
    </div>
  )

}