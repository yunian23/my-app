/*
 * @Author: wanglijuan
 * @Date: 2024-12-07 20:04:52
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 20:20:47
 */

export default function InterceptLayout ({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return <div>
    {children}
    {modal}
  </div>
}