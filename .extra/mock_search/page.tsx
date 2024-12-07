import search_results from "@/experiments/data/trump-picks-vince-halley.json";
import rag_prompts from "@/experiments/RAG_prompt/prompt1.json"
import { Card, CardContent } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { SearchAndEval } from "@/experiments/types"
import { format_search_results_using_XML_tags, retrieveRAGresponse } from '@/utils';

export default async function SearchWithMockData() {
    
    // coerce data into typescript type
    const formatted_results = format_search_results_using_XML_tags((search_results as SearchAndEval).articles);
    console.log(`results: ${formatted_results}`)
    const rag_response = await retrieveRAGresponse(formatted_results, rag_prompts);
    // add response, prompt & experiment data to results
    // TODO: write data to response file
    // const file_name = "my_file"
    // const filePath = path.join(process.cwd(), 'experiments', 'response.ts' )

    return (
        <div>
            <h3>Question: Study the differences and similarities between the democrat & republican opinions.Give an overview of discrepancies between these views and misrepresented facts: </h3>
        
            <Card>
                <CardContent>
                    <ReactMarkdown>{rag_response}</ReactMarkdown>
                </CardContent>
            </Card>

        </div>
    );
}