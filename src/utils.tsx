'use server';

const tokenizer = require('gpt-tokenizer');
import Exa from 'exa-js';
import OpenAI from "openai";

console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAI();
const exa = new Exa(process.env.EXA_API_KEY);

function log_tokens(messages) {
    let totalTokens = 0;
    messages.forEach((msg) => {
    const tokens = tokenizer.encode(msg.content);
    totalTokens += tokens.length;
    });

console.log(`Total tokens: ${totalTokens}`);
}

async function exa_search(query: string = "", numResults: number = 5) {
    /**
     * Make a search using the Exa API using the given query & settings
    */
    const search = await exa.searchAndContents(
        query,
        {
            type: "neural",
            highlights: { highlightsPerUrl: 1, numSentences: 5, query: "This is the highlight query:" },
            useAutoprompt: true,
            category: "news",
            numResults: numResults,
            text: true,
        }

    );
    return search;

}

function format_search_results_as_RAG_context(results): string {
    /**
     * Take in a result object from  the exa search and format it into a LLM ready text
     */
    let output = "";
    console.log(results)
    for (const content of results.map(res => ({ "title": res.title, "text": res.text, "highlights": res.hihglights }))) {
        console.log(content)
        output+= "Title:" + content["title"] + "\n"
        if (content["highlights"])
        {
            for (const highlight  of content["highlights"]){
                output +=  highlight + "\n"
            }


        }
        
        output+= "\n"
        output+= "-------------------\n\n"
    }
    // console.log(`LLM results: ${output}`)

    return output

}


async function RAGSearchResults(query:string) {
    const blue_search = await exa_search(query + "I am a democrat", 10);
    const blue_content = format_search_results_as_RAG_context(blue_search.results);
    const red_search = await exa_search(query + "I am a republican", 10);
    const red_content = format_search_results_as_RAG_context(red_search.results);
    const SYSTEM_MESSAGE = "You are a helpful assistant that generates search queries based on user questions. Only generate one search query."

    let guiding_prompt = "Study  the differences and similarities between the democrat & republican opinions. Use these leanings to give a bias overview when answering the user's question and please cite your sources.";
    const messages = [
        {"role": "system", "content": SYSTEM_MESSAGE},
        { "role": "system", "content": guiding_prompt },
        { "role": "user", "content": query },
        { "role": "system", "content": "Here's a list of articles to research: \n\n Democrat:" + blue_content + "\n\n" + "Republican:" + red_content },

    ]
    log_tokens(messages)
    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages:  [
        { "role": "system", "content": guiding_prompt },
        { "role": "user", "content": query },
        { "role": "system", "content": "Here's a list of articles to research: \n\n Democrat:" + blue_content + "\n\n" + "Republican:" + red_content },
        { role: "system", content: "Please format the output as follows:\n\n1. Summary \n2. Democratic bias \n3. Republican Bias" }
        ],
    });
    console.log(completion)
    console.log(completion.choices[0])
    return completion.choices[0].message.content
}

export { log_tokens, RAGSearchResults};