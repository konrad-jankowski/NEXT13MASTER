import Link from "next/link";
import Image from "next/image";
import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";

export default async function HomePage() {
	const { categories } = await executeGraphql(CategoriesGetListDocument, {});

	return (
		<main className="">
			<h1>Home Page</h1>
			<Link href={"/"}></Link>
			<div>
				{categories?.data.map((category) => (
					<div key={category.id}>
						<Link href={`/products/${category.attributes?.name}/1`}>
							<h2 className="font-medium">{category.attributes?.name}</h2>
						</Link>
						<div className="mt-2 flex gap-2">
							{category.attributes?.products?.data.map((product) => {
								return (
									<div key={product.attributes?.name} className="bg-red-50 ">
										<Image
											src={product.attributes?.coverImage?.data?.attributes?.url ?? ""}
											alt={product.attributes?.name ?? ""}
											width={60}
											height={80}
										/>
										<h2>{product.attributes?.name}</h2>
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
