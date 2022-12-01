/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['.'],
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        fontLoaders: [
            { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
    },
}

module.exports = nextConfig
