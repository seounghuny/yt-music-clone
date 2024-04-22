const nextConfig = {
  reactStrictMode: false,  
  eslint: {

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        port: "",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;

