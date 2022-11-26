const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function SearchMovies() {
    return (
        <form className='form'>
            <label htmlFor='query' className='label'>
                Movie name
            </label>
            <input className='input' type='text' id='query' name='query' placeholder='i.e. Leon the Professional' />
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
