import Link from "next/link";
import Image from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductsListItem = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<li className="w-72">
			<div key={product?.attributes?.name}>
				<div className="relative  h-80 w-full overflow-hidden rounded-md">
					<Link href={`/product/${product?.attributes?.slug}`}>
						<Image
							src={product?.attributes?.images.data[0].attributes?.url ?? ""}
							alt={product?.attributes?.name ?? ""}
							fill
						/>
					</Link>
				</div>
				<h2 className="mt-3 text-center font-medium">{product?.attributes?.name}</h2>
				<h3 className="py-1 text-center text-xs">{product?.attributes?.descriptionShort}</h3>
				<h4 className="text-center font-medium">{formatMoney(product?.attributes?.price ?? 0)}</h4>
			</div>
		</li>
	);
};
