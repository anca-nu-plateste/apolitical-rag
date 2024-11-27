import fs from 'fs';
import path from 'path';
import search_results from "@/app/data/trump-picks-vince-halley.json";


export default function SearchWithMockData() {
    return (
        <div>
            {search_results.map(article => {
                return <div>
                    <h3> {article["title"]}</h3>
                    <h6>Affiliation: {article["political_affiliation"]}</h6>
                    <p>
                        {article["body"]}
                    </p>
                </div>
            })}
        </div>
    );
}