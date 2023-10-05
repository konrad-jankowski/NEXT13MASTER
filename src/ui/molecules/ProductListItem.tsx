import Link from "next/link";
import Image from "next/image";
import { type ProductAttributesFragment } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export const ProductListItem = ({
	attributes,
}: {
	attributes: ProductAttributesFragment | null | undefined;
}) => {
	return (
		<li>
			<div key={attributes?.name}>
				<div className="rounded-md bg-red-50 p-2">
					<Link href={`/product/${attributes?.slug}`}>
						<Image
							src={attributes?.coverImage?.data?.attributes?.url ?? ""}
							alt={attributes?.name ?? ""}
							width={220}
							height={220}
						/>
					</Link>
				</div>
				<h2 className="text-center">{attributes?.name}</h2>
				<h2 className="text-center font-medium">{formatMoney(attributes?.price ?? 0)}</h2>
			</div>
		</li>
	);
};
