import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './components/Cart/Cart.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "homepage", element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
