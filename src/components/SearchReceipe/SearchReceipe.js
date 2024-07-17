import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchReceipe() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = "/search?q=" + search;
		navigate(url);
		setSearch("");
	};

	return (
		<form className="searchContainer" onSubmit={handleSubmit}>
			<label>
				<span>Search:</span>
				<input
					type="text"
					name="search"
					id="search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</label>
		</form>
	);
}
