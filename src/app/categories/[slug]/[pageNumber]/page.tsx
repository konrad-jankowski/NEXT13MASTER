import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetByCategoryNameDocument } from "@/gql/graphql";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function CategoryProductPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const products = await executeGraphql({
		query: ProductsGetByCategoryNameDocument,
		variables: {
			filters: { name: { eq: params.slug } },
		},
	});

	if (!products) {
		throw notFound();
	}

	return (
		<section>
			<span className="mb-2 text-center">
				Category: {params.slug}, Page: {params.pageNumber}
			</span>
			<div>
				<ProductsList products={products.categories?.data[0].attributes?.products?.data} />
			</div>
		</section>
	);
}
