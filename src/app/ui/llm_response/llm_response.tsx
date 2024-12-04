import { Card, CardContent, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';


import styles from '@/app/ui/llm_response/llm_response.module.css'


interface LLMResponseProps {
    response: string;
}


export default function LLMResponse({ response }: LLMResponseProps) {
    return (
        <div className={styles.completionContainer}>
            <Typography variant="h5" component="div">
                RAG Answer:
            </Typography>
            <Card>
                <CardContent>
                    <ReactMarkdown>{response}</ReactMarkdown>
                </CardContent>
            </Card>
        </div>
    );
}