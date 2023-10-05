import Link from "next/link";
// import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemType } from "../types";

type ProductListItemProps = {
	product: ProductListItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{/* <ProductCoverImage src={product.image.src} alt={product.image.alt} /> */}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
