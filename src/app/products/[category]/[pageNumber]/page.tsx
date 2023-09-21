export async function generateStaticParams({ params }: { params: { category: string } }) {
	console.log(params);

	return [{ page: "1" }, { page: "2" }, { page: "3" }];
}

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			{params.category} {params.pageNumber}
		</h1>
	);
}
