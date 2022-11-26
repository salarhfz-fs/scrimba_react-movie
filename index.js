const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const getUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=c560a5cf8d65ebc0f13dc245d96be4f3&language=en-US&query=${query}&page=1&include_adult=false`;

function SearchMovies() {
    const [query, setQuery] = React.useState('');

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await fetch(getUrl(query));
        if (response.ok) {
            const response_json = response.json();
            console.log(response_json);
        } else {

        }

    };

    return (
        <form className='form' onSubmit={searchMovies}>
            <label htmlFor='query' className='label'>
                Movie name
            </label>
            <input
                className='input'
                type='text'
                id='query'
                name='query'
                placeholder='i.e. Leon the Professional'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className='button' type='submit'>Search</button>
        </form>
    );
}

function App() {
    return (
        <div className='container'>
            <h1 className='title'>React Movie Search</h1>
            <SearchMovies />
        </div>
    );
}

root.render(<App />);
