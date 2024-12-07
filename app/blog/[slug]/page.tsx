/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 11:06:10
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 11:09:47
 */
export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  return <div>参数：{slug}</div>
}