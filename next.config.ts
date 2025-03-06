import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "localhost",
      //   port: "1337",
      //   pathname: "/uploads/**/*",
      // },
      {
        protocol: "https",
        hostname: "server-7m9a.onrender.com",
        port: "",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
