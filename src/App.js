import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import UseMemoDemo from "./components/UseMemoDemo";


const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        setUserName("Kanishk Gupta");
    }
    ,[]);

    return(
    <Provider store={appStore}>
    <UserContext.Provider value = {{loggedInUser:userName, setUserName}}>
    <> 
    <UserContext.Provider value = {{loggedInUser:"Elon Musk"}}>
    <Header/>
    </UserContext.Provider>
    <Outlet/>
    </>
    </UserContext.Provider>
    </Provider>
   )
}

const Grocery = lazy(() => (import("./components/Grocery")));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path:"/useMemoDemo",
                element:<UseMemoDemo/>
            },
            {
                path: "/grocery",
                element: (<Suspense fallback = {<h1>Loading...........</h1>}>
                    <Grocery/>
                </Suspense>),
            }
        ]
    },
  ]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)