import React, { useState } from 'react';
import styles from './search_results.module.css';
import { SearchResult } from '../types';
import ReactMarkdown from 'react-markdown';

export default function SearchResults({ results }: { results: SearchResult[]}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? results.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === results.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div>
                <h1> Results</h1>
            </div>
            <div className={styles.results}>
                <div key={results[currentIndex].url}>
                    <h3>{results[currentIndex].title}</h3>
                    <ReactMarkdown className={styles.text}>{results[currentIndex].text}</ReactMarkdown>
                </div>
                <div className={styles.arrow_keys}>
                    <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
                    <button className={styles.arrow} onClick={handleNext}>&gt;</button>
                </div>

            </div>
        </>
    );
}
