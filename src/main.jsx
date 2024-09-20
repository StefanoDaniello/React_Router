import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Prova from './pages/Prova.jsx';
import Cards from './pages/Cards.jsx';
import Card from './pages/Card.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ContextProvider } from './store/context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/prova",
    element: <Prova></Prova>
  },
  {
    path: "/cards",
    element: <Cards></Cards>
  },
  {
    path: "/cards/:cardID",
    element: <Card/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </StrictMode>
)
