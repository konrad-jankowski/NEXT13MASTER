import Image from "next/image";
import Link from "next/link";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";

export default async function HomePage() {
	const { products } = await executeGraphql(ProductsGetListDocument, {});

	return (
		<main className="">
			<h1>Home Page</h1>
			<ul>
				{products?.data.map((p) => {
					return (
						<li key={p.id}>
							<Link href={`/product/${p.attributes?.slug}`}>
								<p>{p.attributes?.name}</p>
								<p>{p.attributes?.price}</p>
								<p>{p.attributes?.description}</p>
								<Image
									src={p.attributes?.coverImage.data?.attributes?.url ?? ""}
									alt={p.attributes?.name ?? ""}
									width={80}
									height={60}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
