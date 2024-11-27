'use client';

import { useState } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import {RAGSearchResults} from '@/utils'
import styles from '@/app/ui/index.module.css'
import ReactMarkdown from 'react-markdown';


export default function Home() {
    const [query, setQuery] = useState("");
    const [completion, setCompletion] = useState("");

    const handleSearch = async () => {
        console.log(`Query ${query}`)
        const message = await (RAGSearchResults(query))
        message ? setCompletion(message) : console.log("We got an empty response from RAG")
    }

    return (
        <div className={styles.container}>
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
                <button onClick={handleSearch} className={styles.button}>Search</button>
            </div>
            {completion && (
                <div className={styles.completionContainer}>
                    <Typography variant="h5" component="div">
                    RAG Answer:
                    </Typography>
                    <Card>
                        <CardContent>
                           <ReactMarkdown>{completion}</ReactMarkdown>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}