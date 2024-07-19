import { projectFirestore } from "../firebase/config";

import React, { useState, useEffect } from "react";

import ReceipeList from "../components/ReceipeList/ReceipeList";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
    const [recipes, setRecipes] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        let unsub;
        try {
            unsub = projectFirestore.collection("recipes").onSnapshot(
                (collection) => {
                    if (collection.empty) {
                        setIsPending(false);
                        throw new Error("No recipies to load.");
                    }
                    setRecipes(
                        collection.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                    );
                    setIsPending(false);
                },
                (error) => {
                    setError(error.message);
                    setIsPending(false);
                },
            );
        } catch (error) {
            unsub();
            setError(error.message);
            setIsPending(false);
        }
    }, []);

    return (
        <>
            {isPending && <div>Loading recipes...</div>}
            {error && <div>{error}</div>}
            {recipes && <ReceipeList receipies={recipes} />}
        </>
    );
}
