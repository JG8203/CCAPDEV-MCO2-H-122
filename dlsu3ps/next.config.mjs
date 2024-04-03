/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['picsum.photos','en.kpop-star.net','assets.teenvogue.com','utfs.io','res.cloudinary.com'] // unused domains for legacy
    }
  }

export default nextConfig;
