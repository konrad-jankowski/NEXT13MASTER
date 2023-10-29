import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductsListItem = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<li className="w-80">
			<div key={product?.attributes?.name} className="relative">
				<div className="relative  h-96 w-full overflow-hidden rounded-md">
					<Link href={`/product/${product?.attributes?.slug}`}>
						<Image
							src={product?.attributes?.images.data[0].attributes?.url ?? ""}
							alt={product?.attributes?.name ?? ""}
							fill
						/>
					</Link>
				</div>
				<div className="absolute left-3 top-3 flex gap-4 text-sm">
					{product.attributes?.isBestseller && (
						<div className="flex cursor-pointer items-center justify-center gap-1 rounded-md border border-black bg-white px-3	py-1">
							Bestseller <Zap className="fill-yellow-400" size={18} strokeWidth={1.2} />
						</div>
					)}
					{product.attributes?.discount && (
						<div className="flex cursor-pointer items-center justify-center rounded-md bg-fuchsia-300 px-3 py-1 font-medium uppercase	text-white">
							Oszczędź do {product.attributes.discount * 100}%
						</div>
					)}
				</div>
				<h2 className="mt-3 text-center font-medium">{product?.attributes?.name}</h2>
				<h3 className="py-1 text-center text-xs">{product?.attributes?.descriptionShort}</h3>
				<h4 className="text-center font-medium">{formatMoney(product?.attributes?.price ?? 0)}</h4>
			</div>
		</li>
	);
};
