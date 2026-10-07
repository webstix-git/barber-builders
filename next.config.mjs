/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keeps links and bookmarks to the old .html page addresses working.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:page.html', destination: '/:page', permanent: true },
    ];
  },
};

export default nextConfig;
