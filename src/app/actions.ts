"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveItemDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: {
			updateOrderItemId: itemId,
			quantity: quantity,
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
