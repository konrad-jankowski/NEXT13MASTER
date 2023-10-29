import { Package2 } from "lucide-react";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductListItemDescription = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-between">
				<h1 className="text-2xl font-semibold">{product.attributes?.name}</h1>
				<p className="my-2 text-xl font-medium">{formatMoney(product.attributes?.price ?? 0)}</p>
				<p className="my-2 text-base">{product.attributes?.descriptionShort}</p>
				<div className="my-2 inline-flex items-center gap-2 text-lg">
					<Package2 strokeWidth={1.25} /> Darmowa dostawa od (299 zł)
				</div>
			</div>
		</div>
	);
};
