// import { ProductList } from "./ProductList";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument, {});
	await sleep(3000);
	return (
		<ul>
			{products?.data.map((p) => {
				return <li key={p.id}>{p.attributes?.name}</li>;
			})}
		</ul>
	);
};
