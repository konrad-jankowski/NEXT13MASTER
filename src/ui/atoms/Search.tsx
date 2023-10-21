"use client";
import { useRouter } from "next/navigation";
import { type ChangeEvent } from "react";

export const Search = () => {
	const router = useRouter();

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;
		router.push(`/search?query=${searchTerm}`);
	};

	return (
		<input
			onChange={handleSearchInputChange}
			className="pl-2 text-black"
			type="text"
			placeholder="Search"
		/>
	);
};
