import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Perfumy",
		name: "Ambra",
		price: 18009,
		coverImage: {
			alt: "Ambra",
			src: "/perf1.webp",
		},
	},
	{
		id: "2",
		category: "Perfumy",
		name: "Agapi",
		price: 289099,
		coverImage: {
			alt: "Agapi",
			src: "/perf2.webp",
		},
	},
	{
		id: "3",
		category: "Perfumy",
		name: "ROCHAS BYZANCE GOLD",
		price: 37900,
		coverImage: {
			alt: "ROCHAS BYZANCE GOLD",
			src: "/perf3.webp",
		},
	},
	{
		id: "4",
		category: "Perfumy",
		name: "SOUS LE PONT MIRABEAU",
		price: 34000,
		coverImage: {
			alt: "SOUS LE PONT MIRABEAU",
			src: "/perf4.webp",
		},
	},
];

export default function ProductsPage() {
	return <ProductList data-testid="products-list" products={products} />;
}
