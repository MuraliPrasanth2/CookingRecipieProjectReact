import "./create.css";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const url = "http://localhost:3000/recipes";
    const { data, isPending, postData } = useFetch(url, "POST");
    const navigate = useNavigate();

    const handleAddIngredient = (e) => {
        e.preventDefault();
        if (!(ingredient === "")) {
            setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
            setIngredient("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToPost = {
            title,
            ingredients,
            method,
            cookingTime,
        };
        postData(dataToPost);
    };

    useEffect(() => {
        setTitle("");
        setIngredient("");
        setIngredients([]);
        setCookingTime(0);
        setMethod("");
        if (data) {
            navigate("/");
        }
    }, [data]);

    return (
        <form className="createForm" onSubmit={handleSubmit}>
            <label>
                <span className="label">Title</span>
                <input
                    type="text"
                    name="title"
                    value={title}
                    disabled={isPending}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </label>
            <label>
                <span className="label">Ingredients</span>
                <span className="ingredientLine">
                    <input
                        type="text"
                        name="ingredients"
                        value={ingredient}
                        disabled={isPending}
                        onChange={(e) => {
                            setIngredient(e.target.value);
                        }}
                    />
                    <button disabled={isPending} onClick={handleAddIngredient}>
                        Add
                    </button>
                </span>
                <span className="ingredients">{ingredients.join(", ")}</span>
            </label>
            <label>
                <span className="label">Method </span>
                <input
                    type="text"
                    name="method"
                    value={method}
                    disabled={isPending}
                    onChange={(e) => {
                        setMethod(e.target.value);
                    }}
                />
            </label>
            <label>
                <span className="label">Cooking Time</span>
                <input
                    type="text"
                    name="cookingtime"
                    disabled={isPending}
                    value={cookingTime}
                    onChange={(e) => {
                        setCookingTime(e.target.value);
                    }}
                />
            </label>
            <button disabled={isPending} type="submit" className="btn">
                Add recipe
            </button>
        </form>
    );
};

export default Create;
