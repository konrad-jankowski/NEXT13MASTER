import { Heart, ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";
import { Search } from "../atoms/Search";

const navLinks = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "All",
		href: "/products",
	},
	{
		label: "Shoes",
		href: "/categories/shoes",
	},
	{
		label: "Skateboards",
		href: "/categories/skateboards",
	},
	{
		label: "Collections",
		href: "/collections",
	},
];

export const Navbar = () => {
	return (
		<nav className="bg-black py-4 text-white">
			<ul className="flex h-10 items-center justify-around gap-8">
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
						<User2 size={22} />
					</li>
					<li>
						<Heart size={22} />
					</li>
					<Link href="/cart">
						<ShoppingCart size={22} />
					</Link>
				</div>
			</ul>
		</nav>
	);
};
