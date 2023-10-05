import { type Metadata } from "next";
import { Suspense } from "react";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
// import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import {
	// ProductsGetListDocument,
	ProductGetListByIdDocument,
	GetProductIdBySlugDocument,
} from "@/gql/graphql";

// export const generateStaticParams = async () => {
// 	const { products } = await executeGraphql(ProductsGetListDocument, {});
// 	return products?.data.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { products } = await executeGraphql(GetProductIdBySlugDocument, {
		filters: { slug: { eq: params.productId } },
	});
	const id = products?.data[0].id;
	const { product } = await executeGraphql(ProductGetListByIdDocument, {
		productId: id,
	});
	return {
		title: `${product?.data?.attributes?.name} - sklep internetowy`,
		description: `${product?.data?.attributes?.description}`,
		openGraph: {
			title: `${product?.data?.attributes?.name} - sklep internetowy`,
			description: `${product?.data?.attributes?.description}`,
			images: [product?.data?.attributes?.coverImage.data?.attributes?.url ?? ""],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const { products } = await executeGraphql(GetProductIdBySlugDocument, {
		filters: { slug: { eq: params.productId } },
	});
	const id = products?.data[0].id;
	const { product } = await executeGraphql(ProductGetListByIdDocument, {
		productId: id,
	});

	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage
					src={product?.data?.attributes?.coverImage.data?.attributes?.url ?? ""}
					alt=""
				/>
				{/* <ProductListItemDescription
					key={product?.data?.attributes?.name}
					product={product?.data?.attributes}
				/> */}
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<h1>suggested products</h1>
				</Suspense>
			</aside>
		</>
	);
}
