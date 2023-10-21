import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductListItemDescription = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-between">
				<h1 className="text-xl font-semibold">{product.attributes?.name}</h1>
				<p className="my-2 text-lg font-medium">{formatMoney(product.attributes?.price ?? 0)}</p>
				<p className="text-gray-500">{product.attributes?.description}</p>
			</div>
		</div>
	);
};
