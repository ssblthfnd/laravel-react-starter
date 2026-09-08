import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Inventaris YPVDP</h1>
            <p>React berhasil terhubung dengan Laravel.</p>
        </div>
    );
}

const root = createRoot(document.getElementById('app'));

root.render(<App />);