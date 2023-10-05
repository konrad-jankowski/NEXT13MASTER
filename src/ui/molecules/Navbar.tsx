import { Heart, ShoppingCart, User2 } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";

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
		href: "/products/shoes",
	},
	{
		label: "Skateboards",
		href: "/products/skateboards",
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
					</div>
				</div>
				<div className="flex items-center gap-4">
					<li>
						<User2 size={22} />
					</li>
					<li>
						<Heart size={22} />
					</li>
					<li>
						<ShoppingCart size={22} />
					</li>
				</div>
			</ul>
		</nav>
	);
};
