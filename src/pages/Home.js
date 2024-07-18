import React from "react";

import ReceipeList from "../components/ReceipeList/ReceipeList";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
    const url = "http://localhost:3000/recipes";
    const { data: receipies, isPending, error } = useFetch(url);
    return (
        <>
            {isPending && <div>Loading recipes...</div>}
            {error && <div>{error}</div>}
            {receipies && <ReceipeList {...{ receipies }} />}
        </>
    );
}
