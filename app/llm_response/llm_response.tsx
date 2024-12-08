import React from 'react';
import { useState } from "react";

import styles from './llm_response.module.css';
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardHeader, CardTitle } from 'react-bootstrap';

interface LLMResponseProps {
    response: string;
}

export default function LLMResponse({ response }: LLMResponseProps) {
    const [showResponse,setShowResponse] = useState(false);
    const handleLLM = () => {
        setShowResponse(true)
    }
    return (
        <div className={styles.completionContainer}>
            {! showResponse && <Button variant="primary" onClick={handleLLM}>Evaluate Bias</Button>}
            {showResponse && <div>
                <Card className={styles.LLMResponse}>
                <CardContent>
                    <ReactMarkdown >{response}</ReactMarkdown>
                </CardContent>
            </Card>
            </div>}
        </div>
    );
}
