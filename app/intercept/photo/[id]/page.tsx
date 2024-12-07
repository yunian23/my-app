/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 19:43:21
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:02:18
 */
import Image  from 'next/image';
import { list } from '@/lib/data'

export default async function PhotoDetailPage({ params }: { params: { id: string }}) {
  const { id } = await params;
  const photo = list.find(item => item.id === +id)

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <Image src={photo?.imageUrl!} alt="Two each of gray, white, and black shirts laying flat." className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block" width={300} height={300} />
  
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
              </div>
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">{photo?.alt}</h2>
                <p className="text-3xl tracking-tight text-gray-900">${photo?.price}</p>
              </div>
        </div>
      </div>
    </div>
  )

}