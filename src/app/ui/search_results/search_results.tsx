import styles from '@/app/ui/search_results/search_results.module.css'

export default function SearchResults({results}) {
    return (
        <div className={styles.results} >
            {results.map(result => (
                <div className={styles.results} key={result.url}> 
                    {/* TODO: read body property */}
                    <p>{result.text}</p>
                </div>
            ))}
        </div>
    );
}