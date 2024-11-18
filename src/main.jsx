import   {Toaster}  from 'react-hot-toast'

import { createRoot } from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout.jsx';  
import Hero from './Components/Hero.jsx';  
import BookDetails from './Components/BookDeatils.jsx';
import React from 'react';
import ListedBook from './Components/ListedBook.jsx';
import PageToRead from './Components/PageToRead.jsx';
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
      {
        path:'/detail/:id',
        loader:()=>fetch('/src/Components/CardData.json'),
        element:<BookDetails></BookDetails>
        
      },
      {
        path:'/listedBooks',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>
      }
     
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
)
