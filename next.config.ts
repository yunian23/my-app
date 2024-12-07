/*
 * @Author: wanglijuan
 * @Date: 2024-11-28 21:21:44
 * @LastEditors: wanglijuan
 * @LastEditTime: 2024-12-07 19:39:09
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {  
        source: '/settings',  
        destination: '/',  
        permanent: true,  
      },  
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
    ],
  },
};

export default nextConfig;
