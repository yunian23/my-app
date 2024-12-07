/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 19:23:36
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:19:52
 */
import Image from 'next/image'
import { list } from '@/lib/data'
import Link from 'next/link'

export default function InterceptPage(){
  return (
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

      {
        list.map(item => (
          <Link href={`/intercept/photo/${item.id}`} className="group" key={item.id}>
            <Image src={item.imageUrl} width={300} height={300} alt={item.alt} />
            <h3 className="mt-4 text-sm text-gray-700">{item.alt}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
          </Link>
        ))
      }
    </div>
  </div>
</div>
  )
}