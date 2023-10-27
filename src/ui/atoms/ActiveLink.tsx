"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({ href, children }: { href: Route; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link href={href} className={clsx(` hover:text-black/70`, isActive && `underline`)}>
			{children}
		</Link>
	);
};
