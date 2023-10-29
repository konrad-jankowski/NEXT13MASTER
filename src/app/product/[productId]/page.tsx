import { type Metadata } from "next";
import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import { AddToCartButton } from "./AddToCartButton";
import { getSingleProductById } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { Slider } from "@/ui/organisms/Slider";

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
		if (cart.data?.id) {
			await addProductToCart(cart.data?.id, params.productId);
		}

		revalidateTag("cart");
	}

	return (
		<>
			<article className="relative mt-[7rem] flex w-full gap-16 pl-10">
				<div className="mt-6 h-[34rem] w-[1rem] basis-[65%]">
					<Slider images={product.attributes?.images.data} />
				</div>
				<div className="fixed right-0 top-0 z-20 mt-[7rem] h-[calc(100vh-7rem)] w-[32%] bg-white px-8 py-10 shadow-lg">
					<ProductListItemDescription key={product?.attributes?.name} product={product} />
					<form action={addProductToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<div className="py-6 pl-10">
				{product.attributes?.discount && (
					<div className="flex w-fit cursor-pointer items-center justify-center rounded-md bg-fuchsia-300 px-6 py-1 font-medium uppercase text-white">
						Oszczędź do {product.attributes.discount * 100}%
					</div>
				)}
			</div>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProducts products={product.attributes?.usuallyBuyWith?.data} />
				</Suspense>
			</aside>
		</>
	);
}
