import { executeGraphql } from "./graphqlApi";
import {
	CollectionsGetListByIdDocument,
	CollectionsGetListDocument,
	GetCollectionSlugByIdDocument,
	GetProductIdBySlugDocument,
	ProductGetListByIdDocument,
	ProductsGetListFilteredDocument,
	ProductsGetListDocument,
	ProductsGetListWithPaginationDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({ query: ProductsGetListDocument });

	return graphqlResponse.products?.data;
};
export const getProductsListWithPagination = async (page: number, pageSize: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListWithPaginationDocument,
		variables: { pagination: { page: page, pageSize: pageSize } },
	});

	return graphqlResponse.products?.data;
};
export const getProductsListByName = async (productName: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListFilteredDocument,
		variables: {
			filters: { name: { containsi: productName } },
		},
	});

	return graphqlResponse.products?.data;
};
export const getNewProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListFilteredDocument,
		variables: {
			filters: { isNew: { eq: true } },
		},
	});

	return graphqlResponse.products?.data;
};
export const getBestsellersProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListFilteredDocument,
		variables: {
			filters: { isBestseller: { eq: true } },
		},
	});

	return graphqlResponse.products?.data;
};

export const getSingleProductById = async (productId: string) => {
	const { products } = await executeGraphql({
		query: GetProductIdBySlugDocument,
		variables: {
			filters: { slug: { eq: productId } },
		},
	});
	const id = products?.data[0].id;
	const { product } = await executeGraphql({
		query: ProductGetListByIdDocument,
		variables: {
			productId: id,
		},
	});
	return product?.data;
};

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetListDocument });

	return graphqlResponse.collections?.data;
};

export const getSingleCollectionById = async (slug: string) => {
	const { collections } = await executeGraphql({
		query: GetCollectionSlugByIdDocument,
		variables: {
			filters: { slug: { eq: slug } },
		},
	});
	const id = collections?.data[0].id;
	const { collection } = await executeGraphql({
		query: CollectionsGetListByIdDocument,
		variables: {
			collectionId: id,
		},
	});
	return collection?.data;
};
