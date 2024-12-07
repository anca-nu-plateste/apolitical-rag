import React, { useState } from 'react';
import styles from './search_results.module.css';

export default function SearchResults({ results }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? results.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === results.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.results}>
            <div className={styles.arrow_keys}>
                <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
                <button  className={styles.arrow} onClick={handleNext}>&gt;</button>
            </div>
            <div className={styles.result} key={results[currentIndex].url}>
                <p>{results[currentIndex].text}</p>
            </div>
        </div>
    );
}