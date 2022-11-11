/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites:async () => {
    return [{source:'/ask','destination':'http://localhost:8000/get'}]
  }
}

module.exports = nextConfig
