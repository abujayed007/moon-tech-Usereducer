import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import TopRated from "../Pages/TopRated";
import Main from "../Pages/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/rating',
                element:<TopRated/>
            },
        ]
    },
   
])