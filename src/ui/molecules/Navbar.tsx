import { Heart, ShoppingCart, User2, Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";
import { Search } from "../atoms/Search";
import { getCartFromCookies } from "@/api/cart";

const navLinks = [
	{
		label: "Strona główna",
		href: "/",
	},
	{
		label: "Produkty",
		href: "/products",
	},
	{
		label: "Kolekcje",
		href: "/collections",
	},
];

export const Navbar = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.data?.attributes?.order_items?.data.length ?? 0;
	return (
		<nav className="fixed z-20 h-28 w-full items-center border-b border-black/10 bg-white text-black hover:bg-white hover:text-black">
			<ul className="flex h-28 items-center justify-between gap-12 px-14">
				<div className="flex ">
					<Logo />
					<div className="flex items-center gap-4">
						{navLinks.map((link) => (
							<li key={link.label}>
								<ActiveLink href={link.href}>{link.label}</ActiveLink>
							</li>
						))}
						<li>
							<Search />
						</li>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<li>
						<SearchIcon size={22} className="cursor-pointer" />
					</li>
					<li>
						<User2 size={22} className="cursor-pointer" />
					</li>
					<li>
						<Heart size={22} className="cursor-pointer" />
					</li>
					<Link href="/cart" className="inline-flex gap-2">
						<ShoppingCart size={22} /> {quantity}
					</Link>
				</div>
			</ul>
		</nav>
	);
};
