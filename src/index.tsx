import React from 'react'
import { createRoot } from 'react-dom/client';
import { RoutesComponent } from './routes'

import './styles/styles.css'

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<RoutesComponent />)