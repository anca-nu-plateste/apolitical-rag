'use client';

// import { useState } from "react";
// import { searchResults, RAGResponse } from '@/utils'
// import styles from '@/app/ui/index.module.css'
// import SearchBar from "./search_bar/search_bar";
// import LLMResponse from "./llm_response/llm_response";
// import SearchResults from "./search_results/search_results";
// import {SearchResult, Search} from '@/app/types'

export default function Home() {
    // const [completion, setCompletion] = useState("")
    // const [results, setResults] = useState<SearchResult[]>([]);
    // const [view, setView] = useState("search")

    // const handleSearch = async (query: string) => {
    //     console.log(`Query ${query}`)
        // const [blue_search, red_search] = await searchResults(query);
        // const formattedResults = formatSearches(blue_search, red_search)
        // console.log(formattedResults)
        // setResults(formattedResults)

        // const message = await RAGResponse(query, blue_search, red_search);
        // if (message) {
        //     setCompletion(message)
        //     console.log(completion)
        // }
        // setView("results")
    // }

    // const handleBack = () => {
    //     setView("search")
    // } 
    return (
        <p>Hello</p>
    )

//     return (
//         <div className={styles.container}>
//             {/* {view == "search"? */}
//             <SearchBar handleSearch={handleSearch} />:
//                 <>
//                     {/* {completion && <LLMResponse response={completion}/>} */}
//                     <div>
//                         <p> -------------</p>
//                     </div>
//                     {/* {results != null && <SearchResults results={results} handleSearch={handleBack} />} */}
//                 </>
//             {/* }     */}
//         </div>
//     );
}


// function formatSearches(
//     blue_search: Search,
//     red_search: Search):
//      SearchResult[] {
//     const results: SearchResult[] = [];
    
//     // Handle single response objects
//     if (blue_search.results) {
//         for (const result of blue_search.results) {
//             results.push({
//                 title: result.title,
//                 text: result.text,
//                 url: result.url,
//                 highlights: result.highlights ?? []
//             });
//         }
//     }
    
//     if (red_search.results) {
//         for (const result of red_search.results) {
//             results.push({
//                 title: result.title,
//                 text: result.text,
//                 url: result.url,
//                 highlights: result.highlights ?? []
//             });
//         }
//     }
    
//     return results;
// }

