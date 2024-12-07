"use client";
import { useState } from "react";
import styles from '@/app/ui/search_bar/search_bar.module.css'

interface SearchBarProps {
    handleSearch: (query: string) => Promise<void>;
  }
export default function SearchBar({ handleSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");
    
    return (
    <div className={styles.searchBox}>
        <h3>Apolitical Rag</h3>
        <br></br>
        <h4>Ask a question about the election and we'll generate a response that captures republican & democratic opinions</h4>
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
