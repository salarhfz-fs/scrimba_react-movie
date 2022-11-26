const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <div className='container'>
            <h1 className='title'>React Movie Search</h1>
        </div>
    );
}

root.render(<App />);
