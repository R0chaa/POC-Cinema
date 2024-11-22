/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos
  basePath: '/POC-Cinema', 
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
