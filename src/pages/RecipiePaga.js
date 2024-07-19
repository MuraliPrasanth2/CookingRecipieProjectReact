import "./singleRecipePage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
const RecipiePaga = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [isComponentUnmounted, setIsComponentUnMounted] = useState(false);

    useEffect(() => {
        setIsPending(true);
        setError(null);
        let unsub;
        try {
            unsub = projectFirestore
                .collection("recipes")
                .doc(id)
                .onSnapshot((doc) => {
                    if (!doc.exists) {
                        setIsPending(false);
                        throw new Error("recipe didn't exists");
                    }
                    if (!isComponentUnmounted) {
                        setRecipe(doc.data());
                        setIsPending(false);
                    }
                });
        } catch (error) {
            if (!isComponentUnmounted) {
                setError(error.message);
                setIsPending(false);
            }
        }
        return () => {
            unsub();
            setIsComponentUnMounted(true);
        };
    }, []);
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
