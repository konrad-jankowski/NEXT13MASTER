"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<li>
			<Link className="mr-20 flex items-center" href="/">
				<Image src={"/logo.svg"} alt="banner" width={60} height={60} />
			</Link>
		</li>
	);
};
