import { executeGraphql } from "./graphqlApi";
import {
	CollectionsGetListByIdDocument,
	CollectionsGetListDocument,
	GetCollectionSlugByIdDocument,
	GetProductIdBySlugDocument,
	ProductGetListByIdDocument,
	ProductsFilterListByNameDocument,
	ProductsGetListDocument,
	ProductsGetListWithPaginationDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products?.data;
};
export const getProductsListWithPagination = async (page: number, pageSize: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListWithPaginationDocument, {
		pagination: { page: page, pageSize: pageSize },
	});

	return graphqlResponse.products?.data;
};
export const getProductsListByName = async (productName: string) => {
	const graphqlResponse = await executeGraphql(ProductsFilterListByNameDocument, {
		filters: { name: { containsi: productName } },
	});

	return graphqlResponse.products?.data;
};

export const getSingleProductById = async (productId: string) => {
	const { products } = await executeGraphql(GetProductIdBySlugDocument, {
		filters: { slug: { eq: productId } },
	});
	const id = products?.data[0].id;
	const { product } = await executeGraphql(ProductGetListByIdDocument, {
		productId: id,
	});
	return product?.data;
};

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

	return graphqlResponse.collections?.data;
};

export const getSingleCollectionById = async (slug: string) => {
	const { collections } = await executeGraphql(GetCollectionSlugByIdDocument, {
		filters: { slug: { eq: slug } },
	});
	const id = collections?.data[0].id;
	const { collection } = await executeGraphql(CollectionsGetListByIdDocument, {
		collectionId: id,
	});
	return collection?.data;
};
