"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveItemDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
	productPrice: number,
) => {
	console.log(quantity * productPrice);

	return executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: {
			updateOrderItemId: itemId,
			quantity: quantity,
			total: quantity * productPrice,
		},
		next: {
			tags: ["cart"],
		},
	});
};
export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			deleteOrderItemId: itemId,
		},
	});
};
