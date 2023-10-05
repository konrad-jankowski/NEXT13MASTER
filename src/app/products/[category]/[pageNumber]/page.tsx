import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetByCategoryNameDocument } from "@/gql/graphql";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await executeGraphql(ProductsGetByCategoryNameDocument, {
		filters: { name: { eq: params.category } },
	});

	if (!products) {
		throw notFound();
	}

	return (
		<h1>
			Category: {params.category}, Page: {params.pageNumber}
			<div>
				{products.categories?.data[0].attributes?.products?.data.map((product) => {
					return (
						<h1 key={product.attributes?.name}>
							{product.attributes?.name} - {product.attributes?.price}
						</h1>
					);
				})}
			</div>
		</h1>
	);
}
