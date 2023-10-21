import { ProductsList } from "./ProductsList";
import { getProductsList } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	return (
		<section className="mt-5">
			<h2 className="my-4 font-medium">Sugerowane produkty</h2>
			<ProductsList products={products?.slice(0, 4)} />
		</section>
	);
};
