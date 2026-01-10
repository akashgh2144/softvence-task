import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx or index.js
import '@fontsource/questrial'; 

import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
