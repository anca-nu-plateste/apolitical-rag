export default function SearchResults({results}) {
    return (
        <><p>Hi Mamas</p>
        {results.map(result => (
            <div key={result.url}> 
                {/* TODO: read nody properly */}
                <p>{result.body}</p>
            </div>
        ))}
        </>
    );
}