/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              slug\n              name\n              price\n              coverImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query GetProductIdBySlug($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      id\n    }\n  }\n}": types.GetProductIdBySlugDocument,
    "query ProductGetListById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        name\n        price\n        description\n        coverImage {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetListByIdDocument,
    "fragment ProductAttributes on Product {\n  name\n  price\n  slug\n  description\n  coverImage {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}": types.ProductAttributesFragmentDoc,
    "query ProductsGetByCategoryName($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              name\n              price\n              coverImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetByCategoryNameDocument,
    "query ProductsGetList {\n  products {\n    data {\n      id\n      attributes {\n        ...ProductAttributes\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              slug\n              name\n              price\n              coverImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductIdBySlug($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').GetProductIdBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        name\n        price\n        description\n        coverImage {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductAttributes on Product {\n  name\n  price\n  slug\n  description\n  coverImage {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductAttributesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryName($filters: CategoryFiltersInput) {\n  categories(filters: $filters) {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              name\n              price\n              coverImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      id\n      attributes {\n        ...ProductAttributes\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
