/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos
  basePath: '/NOME-DO-REPOSITORIO', // Substitua pelo nome do repositório
  images: {
    unoptimized: true, // Desativa a otimização de imagens no Next.js
  },
};

module.exports = nextConfig;
