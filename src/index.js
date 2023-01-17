import React from 'react';
import {  createRoot } from 'react-dom/client';
import './styles/style.css';
import TagApp from './components/TagApp';


const root = createRoot(document.getElementById('root'));
root.render(<TagApp/>);