import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

function App () {
    return (
        <h1>Hello world!</h1>
    );
}

root.render(<App />);
