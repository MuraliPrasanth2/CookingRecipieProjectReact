import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ReceipeList from "../components/ReceipeList/ReceipeList";

const Search = () => {
	const queryString = useLocation().search;
	const queryParams = new URLSearchParams(queryString);
	const query = queryParams.get("q");

	const url = "http://localhost:3000/recipes?title=" + query;
	const { error, isPending, data } = useFetch(url);

	return (
		<div>
			<h2 className="page-title">Recipes including "{query}"</h2>
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{data && data.length && <ReceipeList receipies={data} />}
		</div>
	);
};

export default Search;
