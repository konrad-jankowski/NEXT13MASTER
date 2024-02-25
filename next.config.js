/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	typescript: { ignoreBuildErrors: true },
	eslint: {
		ignoreDuringBuilds: true,
	},

	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/skateboards",
				destination: "/products/skateboards/1",
				permanent: false,
			},
			{ source: "/categories/shoes", destination: "/products/shoes/1", permanent: false },
			{ source: "/products", destination: "/products/1", permanent: false },
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
