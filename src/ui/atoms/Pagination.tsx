import Link from "next/link";

export const Pagination = ({ pageNumber, page }: { pageNumber: string; page: number }) => {
	return (
		<Link
			href={`/products/${page}`}
			className={`${
				Number(pageNumber) === page && "bg-black text-white"
			} flex h-8 w-8 items-center justify-center rounded-sm border border-black`}
		>
			{page}
		</Link>
	);
};
