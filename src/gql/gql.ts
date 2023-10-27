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
    "mutation CartAddItem($orderId: ID!, $productId: ID!, $quantity: Int!, $total: Int!, $date: DateTime!) {\n  createOrderItem(\n    data: {Quantity: $quantity, product: $productId, order: $orderId, Total: $total, publishedAt: $date}\n  ) {\n    data {\n      id\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate {\n  createOrder(data: {Total: 0, order_items: null}) {\n    data {\n      id\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($orderId: ID) {\n  order(id: $orderId) {\n    data {\n      id\n      attributes {\n        Total\n        order_items {\n          data {\n            id\n            attributes {\n              Quantity\n              Total\n              product {\n                data {\n                  ...ProductsListItem\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment CartOrder on OrderEntity {\n  id\n}": types.CartOrderFragmentDoc,
    "mutation CartSetItemQuantity($updateOrderItemId: ID!, $quantity: Int!) {\n  updateOrderItem(id: $updateOrderItemId, data: {Quantity: $quantity}) {\n    data {\n      id\n    }\n  }\n}": types.CartSetItemQuantityDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              slug\n              name\n              price\n              images {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionsListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetListById($collectionId: ID) {\n  collection(id: $collectionId) {\n    data {\n      ...CollectionsListItem\n    }\n  }\n}": types.CollectionsGetListByIdDocument,
    "fragment CollectionsListItem on CollectionEntity {\n  id\n  attributes {\n    name\n    slug\n    description\n    image {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    products {\n      data {\n        ...ProductsListItem\n      }\n    }\n  }\n}": types.CollectionsListItemFragmentDoc,
    "query GetCollectionSlugById($filters: CollectionFiltersInput) {\n  collections(filters: $filters) {\n    data {\n      id\n    }\n  }\n}": types.GetCollectionSlugByIdDocument,
    "query GetProductIdBySlug($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      id\n    }\n  }\n}": types.GetProductIdBySlugDocument,
    "query ProductGetListById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        usuallyBuyWith {\n          data {\n            ...ProductsListItem\n          }\n        }\n      }\n      ...ProductsListItem\n    }\n  }\n}": types.ProductGetListByIdDocument,
    "query ProductsGetList {\n  products {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListFiltered($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetListFilteredDocument,
    "query ProductsGetListWithPagination($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetListWithPaginationDocument,
    "fragment ProductsListItem on ProductEntity {\n  id\n  attributes {\n    usuallyBuyWith {\n      data {\n        id\n        attributes {\n          slug\n          price\n          descriptionShort\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n    name\n    price\n    slug\n    description\n    descriptionShort\n    images {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n  }\n}": types.ProductsListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($orderId: ID!, $productId: ID!, $quantity: Int!, $total: Int!, $date: DateTime!) {\n  createOrderItem(\n    data: {Quantity: $quantity, product: $productId, order: $orderId, Total: $total, publishedAt: $date}\n  ) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {Total: 0, order_items: null}) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($orderId: ID) {\n  order(id: $orderId) {\n    data {\n      id\n      attributes {\n        Total\n        order_items {\n          data {\n            id\n            attributes {\n              Quantity\n              Total\n              product {\n                data {\n                  ...ProductsListItem\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrder on OrderEntity {\n  id\n}"): typeof import('./graphql').CartOrderFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($updateOrderItemId: ID!, $quantity: Int!) {\n  updateOrderItem(id: $updateOrderItemId, data: {Quantity: $quantity}) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        products {\n          data {\n            attributes {\n              slug\n              name\n              price\n              images {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetListById($collectionId: ID) {\n  collection(id: $collectionId) {\n    data {\n      ...CollectionsListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionsListItem on CollectionEntity {\n  id\n  attributes {\n    name\n    slug\n    description\n    image {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    products {\n      data {\n        ...ProductsListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollectionSlugById($filters: CollectionFiltersInput) {\n  collections(filters: $filters) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').GetCollectionSlugByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductIdBySlug($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').GetProductIdBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        usuallyBuyWith {\n          data {\n            ...ProductsListItem\n          }\n        }\n      }\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListFiltered($filters: ProductFiltersInput) {\n  products(filters: $filters) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListFilteredDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListWithPagination($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListWithPaginationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on ProductEntity {\n  id\n  attributes {\n    usuallyBuyWith {\n      data {\n        id\n        attributes {\n          slug\n          price\n          descriptionShort\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n    name\n    price\n    slug\n    description\n    descriptionShort\n    images {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
