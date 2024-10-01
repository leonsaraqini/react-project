import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/ReastaurantMenu";
import Test from "./components/Test";

//JSX - is not HTML in JS


const AppLayout = () => {    
    return (
        <div className = "app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children : [
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path:"/test/:id/:doubleId",
                element: <Test/>,
            },
        ],
        errorElement: <Error/>
    },
    

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

