'use client';

import { useState } from "react";
import { RAGSearchResults } from '@/utils'
import styles from '@/app/ui/index.module.css'
import SearchBar from "./search_bar/search_bar";
import LLMResponse from "./llm_response/llm_response";


export default function Home() {
    const [query, setQuery] = useState("");
    const [completion, setCompletion] = useState("");

    const handleSearch = async (query: string) => {
        console.log(`Query ${query}`)
        const message = await (RAGSearchResults(query))
        message ? setCompletion(message) : console.log("We got an empty response from RAG")
    }

    return (
        <div className={styles.container}>
            <SearchBar
                handleSearch={handleSearch} />
            {completion && <LLMResponse response={completion}/>}
        </div>
    );
}