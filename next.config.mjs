/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXTJS_STANDALONE_OUTPUT !== undefined ? { output: "standalone" } : {}),
};

export default nextConfig;
