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

const something = {
	id: "1",
	title: "Veggie Stew",
	ingredients: ["1 Carrot", "1 Leek", "200g Tofu", "300ml Veg stock"],
	method:
		"1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl and cover with a lid. 4. Place the lid on the oven and cook for 40 minutes. 5. Serve with a slaw of your choice",
	cookingTime: "45 minutes",
};
