import "./singleRecipePage.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const RecipiePaga = () => {
	const { id } = useParams();
	const url = "http://localhost:3000/recipes/" + id;
	const { data: recipe, isPending, error } = useFetch(url);

	if (isPending) {
		return <div>Loading recipe...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		recipe && (
			<div className="singleRecipePage">
				<h2 className="title">{recipe.title}</h2>
				<p className="cookingTime">{recipe.cookingTime}</p>
				<p className="ingredients">
					ingredients: {recipe.ingredients.join(",")}
				</p>
				<p className="method">{recipe.method}</p>
			</div>
		)
	);
};

export default RecipiePaga;
