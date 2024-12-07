export interface SearchResult {
    title: string | null;
    text: string;
    url: string;
    highlights?: Array<string> | null;
}

// /**
//  * Formats and combines search results from blue and red searches into a single array.
// //  */
export interface Search {
    results: { title: string | null; text: string; url: string, highlights:Array<string> }[];
}