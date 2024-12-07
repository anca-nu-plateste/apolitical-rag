'use client';

import { useState } from "react";
import { searchResults, RAGResponse } from '@/utils'
import styles from '@/app/ui/index.module.css'
import SearchBar from "./search_bar/search_bar";
import LLMResponse from "./llm_response/llm_response";
import SearchResults from "./search_results/search_results";


export default function Home() {
    const [query, setQuery] = useState("");
    const [completion, setCompletion] = useState("")
    const [results, setResults] = useState("");
    const [view, setView] = useState("search")

    const handleSearch = async (query: string) => {
        console.log(`Query ${query}`)
        const [blue_search, red_search] = await (searchResults(query));
        /* TODO: Add republican docs to results */
        setResults(blue_search.results)

        const message = await RAGResponse(query, blue_search, red_search);
        message ? setCompletion(message) : console.log("We got an empty response from RAG")
        setView("results")
    }

    const handleBack = () => {
        setView("search")
    }

    return (
        <div className={styles.container}>
            {view == "search"?<SearchBar
                handleSearch={handleSearch} />:
                <>
                    {completion && <LLMResponse response={completion}/>}
                    <div>
                        <p> -------------</p>
                    </div>
                    {results && <SearchResults results={results}/>}
                    <button onClick={handleBack}>Make another search</button>
                </>
            }    
        </div>
    );
}
