const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const getUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=c560a5cf8d65ebc0f13dc245d96be4f3&language=en-US&query=${query}&page=1&include_adult=false`;

function SearchMovies() {
    const [query, setQuery] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [movies, setMovies] = React.useState([]);

    const searchMovies = async (e) => {
        setLoading(true);
        setError('');
        e.preventDefault();
        try {
            const response = await fetch(getUrl(query));
            if (response.ok) {
                const data = await response.json();
                setMovies(data.results);
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
        <React.Fragment>
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
            <div className='card-list'>
                {movies.map(movie => (
                    <div className='card' key={movie.id}>
                        <img
                            className='card--image'
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` : 'https://via.placeholder.com/185x278'}
                            alt={movie.title}
                        />
                        <div className='card--content'>
                            <h3 className='card--title'>{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className='card--desc'>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
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
