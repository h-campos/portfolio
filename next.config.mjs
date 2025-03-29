/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },

  ...(process.env.NEXTJS_STANDALONE_OUTPUT !== undefined ? { output: "standalone" } : {}),
};

export default nextConfig;
