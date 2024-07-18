import "./ReceipeList.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ReceipeList({ receipies }) {
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
                    </div>
                );
            })}
        </div>
    );
}
