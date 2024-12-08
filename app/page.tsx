'use client';

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchResults, RAGResponse } from '../utils'
import styles from './index.module.css'
import SearchBar from "./search_bar/search_bar";
import LLMResponse from "./llm_response/llm_response";
import SearchResults from "./search_results/search_results";
import {SearchResult, Search} from './types'
import { Button } from "react-bootstrap";

export default function Home() {
    const [completion, setCompletion] = useState("")
    const [results, setResults] = useState<SearchResult[]>([]);
    const [view, setView] = useState("search")

    const handleSearch = async (query: string) => {
        console.log(`Query ${query}`)
        const [blue_search, red_search] = await searchResults(query);
        const formattedResults = formatSearches(blue_search, red_search)
        setResults(formattedResults)

        const message = await RAGResponse(query, blue_search, red_search);
        if (message) {
            setCompletion(message)
        }
        setView("results")
    }

    const handleBack = () => {
        setView("search")
    }

    return (
        <div className={styles.container}>
            {
            view == "search"?
            <SearchBar handleSearch={handleSearch} />:
            <>
                <div className={styles.results_container}>
                    {completion && <LLMResponse response={completion}/>}
                    <div>
                        {results != null && <SearchResults results={results}/>}
                    </div>
                    <div className={styles.search_button_container}>
                        <Button variant="light" className={styles.search_button} size='lg' onClick={handleBack}> Another search</Button>
                    </div>
                </div>
            </>
            } 
        </div>
    );
}



function formatSearches(
    blue_search: Search,
    red_search: Search):
     SearchResult[] {
    const results: SearchResult[] = [];
    
    // Handle single response objects
    if (blue_search.results) {
        for (const result of blue_search.results) {
            results.push({
                title: result.title,
                text: result.text,
                url: result.url,
                highlights: result.highlights ?? []
            });
        }
    }
    
    if (red_search.results) {
        for (const result of red_search.results) {
            results.push({
                title: result.title,
                text: result.text,
                url: result.url,
                highlights: result.highlights ?? []
            });
        }
    }
    
    return results;
}

