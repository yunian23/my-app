/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 11:06:10
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:44:30
 */


// or Dynamic metadata
export async function generateMetadata({ params }:{
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  return {
    title: `标题${slug}`,
  }
}
export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  return <div>参数：{slug}</div>
}