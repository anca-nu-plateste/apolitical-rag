'use client';

import { useState } from "react";
import { searchResults, RAGResponse } from '@/utils'
import styles from '@/app/ui/index.module.css'
import SearchBar from "./search_bar/search_bar";
import LLMResponse from "./llm_response/llm_response";
import SearchResults from "./search_results/search_results";
import SearchResult from '@/app/utils.tsx'

export default function Home() {
    const [query, setQuery] = useState("");
    const [completion, setCompletion] = useState("")
    const [results, setResults] = useState<SearchResult[]>([]);
    const [view, setView] = useState("search")

    const handleSearch = async (query: string) => {
        console.log(`Query ${query}`)
        const [blue_search, red_search] = await (searchResults(query));
        /* TODO: Add republican docs to results */
        const formattedResults = formatSearches(blue_search, red_search)
        setResults(formattedResults)

        const message = await RAGResponse(query, blue_search, red_search);
        message ? setCompletion(message) : console.log("We got an empty response from RAG")
        setView("results")
    }

    const handleBack = () => {
        setView("search")
    }

    return (
        <div className={styles.container}>
            {view == "search"?
            <SearchBar handleSearch={handleSearch} />:
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

/**
 * Formats and combines search results from blue and red searches into a single array.
 */
function formatSearches(blue_search: { results: SearchResult[] }, red_search: { results: SearchResult[] }): SearchResult[] {
    let results: SearchResult[] = [];
    for (const result of blue_search.results) {
        console.log("Result schema", result);
        results.push({ title: result.title, text: result.text, highlights: result.highlights, url: result.url });
    }
    for (const result of red_search.results) {
        console.log("Result schema", result);
        results.push({ title: result.title, text: result.text, highlights: result.highlights, url: result.url });
    }
    return results;
}

