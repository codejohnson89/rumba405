/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-haiku']);
module.exports = withTM({});

// module.exports = nextConfig
