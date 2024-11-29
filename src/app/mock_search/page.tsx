import fs from 'fs';
import path from 'path';
import search_results from "@/app/data/trump-picks-vince-halley.json";
import { Card, CardContent, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

import { format_search_results_using_XML_tags, retrieveRAGresponse } from '@/utils';


export default async function SearchWithMockData() {

    const formatted_results = format_search_results_using_XML_tags(search_results);
    console.log(`results: ${formatted_results}`)
    const rag_response = await retrieveRAGresponse(formatted_results);
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