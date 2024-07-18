import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchReceipe from "../SearchReceipe/SearchReceipe";
import { useTheme } from "../../hooks/useTheme";

export default function NavBar() {
    const { color } = useTheme();
    return (
        <nav style={{ backgroundColor: color }}>
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
