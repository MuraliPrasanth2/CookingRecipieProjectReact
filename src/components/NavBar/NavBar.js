import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchReceipe from "../SearchReceipe/SearchReceipe";

export default function NavBar() {
    return (
        <nav>
            <div className="nav">
                <h1>
                    <Link to="/">Cooking Ninja</Link>
                </h1>
                <div className="oneline">
                    <SearchReceipe />
                    <Link to="/create" className="btn">
                        Create Recipe
                    </Link>
                </div>
            </div>
        </nav>
    );
}
