import Link from "next/link";

export const Logo = () => {
	return (
		<li>
			<Link className="mr-10 flex items-center" href="/">
				<div className="h-8 w-8 rounded-full bg-red-200"></div>
				<h1 className="ml-2 text-2xl font-bold">SKATESHOP</h1>
			</Link>
		</li>
	);
};
