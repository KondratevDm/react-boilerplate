import React from 'react'
import { createRoot } from 'react-dom/client';

import './styles/styles.css'

const root = createRoot(document.getElementById("root") as HTMLElement);

const App = () => {
    return (
        <>
            <div>JSX is here!</div>
        </>
    )
}

root.render(<App />)