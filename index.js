const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const getUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=c560a5cf8d65ebc0f13dc245d96be4f3&language=en-US&query=${query}&page=1&include_adult=false`;

function SearchMovies() {
    const [query, setQuery] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const searchMovies = async (e) => {
        setLoading(true);
        setError('');
        e.preventDefault();
        try {
            const response = await fetch(getUrl(query));
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                setError('Something went wrong :(');
            }
        } catch (error) {
            setError('Something went wrong :(');
        } finally {
            setLoading(false);
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
            <button className={`button ${loading ? 'disabled' : ''}`} type='submit'>{loading ? 'Loading movies...' : 'Search'}</button>
            {error && <p className='error'>{error}</p>}
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
