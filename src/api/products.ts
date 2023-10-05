import { executeGraphql } from "./graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products;
};
