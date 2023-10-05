import Link from "next/link";
import Image from "next/image";
import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";
import { formatMoney } from "@/utilis";

export default async function HomePage() {
	const { categories } = await executeGraphql(CategoriesGetListDocument, {});

	return (
		<main className="flex flex-col items-center justify-center">
			<h1 className="text-2xl font-medium">Welcome to our shop</h1>
			<Link href={"/"}></Link>
			<div>
				{categories?.data.map((category) => (
					<div className="mt-3" key={category.id}>
						<Link href={`/products/${category.attributes?.name}/1`}>
							<h2 className="text-lg font-medium capitalize">{category.attributes?.name}</h2>
						</Link>
						<div className="mt-3 flex gap-4">
							{category.attributes?.products?.data.map((product) => {
								return (
									<div key={product.attributes?.name}>
										<div className="rounded-md bg-red-50 p-2">
											<Link href={`/product/${product.attributes?.slug}`}>
												<Image
													src={product.attributes?.coverImage?.data?.attributes?.url ?? ""}
													alt={product.attributes?.name ?? ""}
													width={220}
													height={220}
												/>
											</Link>
										</div>
										<h2 className="text-center">{product.attributes?.name}</h2>
										<h2 className="text-center font-medium">
											{formatMoney(product.attributes?.price ?? 0)}
										</h2>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
