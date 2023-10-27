import { ProductsList } from "./ProductsList";
import { type ProductsListItemFragment } from "@/gql/graphql";

export const SuggestedProducts = async ({
	products,
}: {
	products?: ProductsListItemFragment[];
}) => {
	return (
		<section className="mt-5 px-10">
			<h2 className="my-4 font-medium">Sugerowane produkty</h2>
			<ProductsList products={products?.slice(0, 4)} />
		</section>
	);
};
