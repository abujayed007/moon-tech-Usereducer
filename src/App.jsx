import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Routes'
import ProductProvider from './Providers/ProductProvider'


function App() {
  

  return (
    <ProductProvider>

      <RouterProvider router={router}/>
    </ProductProvider>
    
  )
}

export default App
