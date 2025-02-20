/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['giscus.app'],
    },
};

module.exports = withContentlayer(nextConfig);
