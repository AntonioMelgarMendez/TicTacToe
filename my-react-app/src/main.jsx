import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Title from './Title'; 
import Board from './Board';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <Board/>


  </StrictMode>,
)
