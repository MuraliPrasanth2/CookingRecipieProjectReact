import { projectFirestore } from "../../firebase/config";
import "./ReceipeList.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ReceipeList({ receipies }) {
    const deleteRecipe = (id) => {
        projectFirestore.collection("recipes").doc(id).delete();
    };
    return (
        <div className="receipies-container">
            {receipies.map((recipe) => {
                return (
                    <div className="receipe-item" key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p className="duration">{recipe.cookingTime}</p>
                        <p className="method">{recipe.method.substring(0, 30)}</p>
                        <Link className="btn" to={"/recipe/" + recipe.id}>
                            start cooking
                        </Link>
                        <div
                            className="deleteIcon"
                            onClick={() => {
                                deleteRecipe(recipe.id);
                            }}
                        >
                            delete
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
