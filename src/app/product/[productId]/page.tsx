import { type Metadata } from "next";
import { Suspense } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { getProductsList, getSingleProductById } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { CartAddItemDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { getOrCreateCart } from "@/api/cart";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products?.map((product) => ({
		productId: product.id,
	}));
};

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
			images: [product?.attributes?.coverImage.data?.attributes?.url ?? ""],
		},
	};
};

async function addProductToCart(cartId: string, productId: string) {
	const product = await getSingleProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddItemDocument, {
		date: new Date().toISOString(),
		orderId: cartId,
		productId: product.id,
		quantity: 1,
		total: product.attributes?.price * 100,
	});
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getSingleProductById(params.productId);

	if (!product) {
		return null;
	}

	async function addProductToCartAction(_FormData: FormData) {
		"use server";
		const cart = await getOrCreateCart();
		console.log(cart.data);

		await addProductToCart(cart.data?.id, params.productId);

		console.log("Added product to cart");
	}

	return (
		<>
			<article className="flex gap-16">
				<div className="flex-1 ">
					<ProductCoverImage
						src={product?.attributes?.coverImage.data?.attributes?.url ?? ""}
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
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
