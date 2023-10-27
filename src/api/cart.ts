import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import { getSingleProductById } from "./products";
import { CartAddItemDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				orderId: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}
};

export const createCart = async () => {
	const { createOrder: newCart } = await executeGraphql({
		query: CartCreateDocument,
	});
	if (!newCart) {
		throw new Error("Failed to create cart");
		console.log("Failed to create cart");
	}

	cookies().set("cartId", newCart.data?.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
};

export async function getOrCreateCart() {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	return cart;
}


export async function addProductToCart(cartId: string, productId: string) {
	const product = await getSingleProductById(productId);

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			date: new Date().toISOString(),
			orderId: cartId,
			productId: product.id,
			quantity: 1,
			total: product.attributes?.price * 100,
		},
	});
}