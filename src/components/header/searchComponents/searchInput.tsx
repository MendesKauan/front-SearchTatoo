'use client'

import { useEffect, useState } from "react";

export function SearchInput() {
    const [query, setQuery] = useState("")

    useEffect(() => {
        async function searchTatoo() {
            const res = await fetch("https://dummyjson.com/users/search?q=" + query)
            const data = await res.json()

        }
        searchTatoo()
    }, [query])


    return (
        <div className="w-[746px] mx-auto mt-4 bg-gray-100 rounded shadow-md flex items-center px-4">
            <input className="w-full bg-transparent outline-none" value={query} onChange={e => setQuery(e.target.value)}/>
        </div>
    )
}