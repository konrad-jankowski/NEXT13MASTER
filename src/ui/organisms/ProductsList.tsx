import { ProductsListItem } from "../molecules/ProductsListItem";
import { type ProductsListItemFragment } from "@/gql/graphql";

export const ProductsList = ({ products }: { products?: ProductsListItemFragment[] }) => {
	if (!products) {
		return null;
	}

	return (
		<ul className="grid grid-cols-1 justify-center gap-8 lg:grid-cols-4">
			{products.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
