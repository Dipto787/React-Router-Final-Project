 
import { createRoot } from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout.jsx';  
import Hero from './Components/Hero.jsx'; 
let router=createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/', 
        loader:()=>fetch('/src/Components/CardData.json'),
        element:<Hero></Hero>
      },
      
     
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}>

   </RouterProvider>
)
