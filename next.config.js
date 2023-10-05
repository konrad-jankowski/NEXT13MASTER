/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app", "res.cloudinary.com"],
	},
	typescript: { ignoreBuildErrors: true },

	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{ source: "/products/skateboards", destination: "/products/skateboards/1", permanent: false },
			{ source: "/products/shoes", destination: "/products/shoes/1", permanent: false },
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
