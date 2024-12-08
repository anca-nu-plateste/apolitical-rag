"use client";
import { useState } from "react";
import styles from './search_bar.module.css'

interface SearchBarProps {
    handleSearch: (query: string) => Promise<void>;
  }
export default function SearchBar({ handleSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");
    
    return (
    <div className={styles.searchBox}>
        <h1>Apolitical Rag</h1>
        <br></br>
        <h2>Ask me about a current event or choose a hand picked search</h2>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className={styles.input}
        />
        <button 
            onClick={() => handleSearch(query)} 
            className={styles.button}
        >
            Search
        </button>
    </div>
    );
}

let title_to_query: Record<string, string>= {
        "China hacking calls of senior political figures within the US": 
            "US outlook on China hacking calls of senior political figures within the US",
            // romania election
            "romanian presidential election": "Query news about the romanian presidential election in 2024"
            // some trump cabinet election
};
