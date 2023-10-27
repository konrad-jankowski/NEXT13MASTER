import { type Metadata } from "next";
import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import { AddToCartButton } from "./AddToCartButton";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { getSingleProductById } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { addProductToCart, getOrCreateCart, updateCartItems } from "@/api/cart";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products?.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getSingleProductById(params.productId);

	return {
		title: `${product?.attributes?.name} - sklep internetowy`,
		description: `${product?.attributes?.description}`,
		openGraph: {
			title: `${product?.attributes?.name} - sklep internetowy`,
			description: `${product?.attributes?.description}`,
			images: [product?.attributes?.images.data.map((image) => image.attributes?.url)],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getSingleProductById(params.productId);

	if (!product) {
		return null;
	}

	async function addProductToCartAction(_FormData: FormData) {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(cart.data?.id, params.productId);

		/* if (response.orderedItemQuantity && response.orderedItemQuantity > 1) {
			updateCartItems(response.orderedItemId, response.orderedItemQuantity);
		}
 */
		revalidateTag("cart");
	}

	return (
		<>
			<article className="flex gap-16 px-10">
				<div className="flex-1 ">
					<ProductCoverImage
						src={product?.attributes?.images.data[0].attributes?.url ?? ""}
						alt={product?.attributes?.name ?? ""}
					/>
				</div>
				<div className="flex-1 ">
					<ProductListItemDescription key={product?.attributes?.name} product={product} />
					<form action={addProductToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProducts products={product.attributes?.usuallyBuyWith?.data} />
				</Suspense>
			</aside>
		</>
	);
}
