import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import { CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql(CartGetByIdDocument, {
			orderId: cartId,
		});
		if (cart) {
			return cart;
		}
	}
};

export const createCart = async () => {
	const { createOrder: newCart } = await executeGraphql(CartCreateDocument, {});
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
