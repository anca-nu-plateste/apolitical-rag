/**
 * Represents an article with text and some metadata.
 */
export interface Article {
    title: string;
    political_affiliation: string;
    body: string;
  }
  
  /**
   * Contains the search results, the golden label, and the GPT-4 response.
   * 
   * @property {Article[]} articles
   * @property {string} [gpt4Response] - optional GPT-4 response.
   */

  export interface SearchAndEval {
    articles: Article[];
    gpt4Response?: string;
  }