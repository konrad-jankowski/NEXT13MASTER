import Link from "next/link";
import Image from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductsListItem = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<li>
			<div key={product?.attributes?.name}>
				<div className="rounded-md bg-red-50 p-2">
					<Link href={`/product/${product?.attributes?.slug}`}>
						<Image
							src={product?.attributes?.coverImage?.data?.attributes?.url ?? ""}
							alt={product?.attributes?.name ?? ""}
							width={220}
							height={220}
						/>
					</Link>
				</div>
				<h2 className="text-center">{product?.attributes?.name}</h2>
				<h2 className="text-center font-medium">{formatMoney(product?.attributes?.price ?? 0)}</h2>
			</div>
		</li>
	);
};
