import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './router'
import {Navbar, Container} from './components';


ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Container>
      <Navbar/>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>,
)
