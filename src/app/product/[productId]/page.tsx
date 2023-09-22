import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - sklep internetowy`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name} - sklep internetowy`,
			description: `${product.description}`,
			images: [product.image.src],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs ">
				<ProductCoverImage {...product.image} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
