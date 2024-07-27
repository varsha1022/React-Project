import React from "react" 
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "./NotFound"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BlogItemDetails from "./BlogItemDetails"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            {/* <Home/> */}
            <Outlet/>
            {/* <About/> */}

        </div>
    )
}


const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<NotFound/>,
        children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/contact",
            element:<Contact/>,
        },
        {
            // path:"/blogs/:id/author",
            path:"/blogs/:id",
            element:<BlogItemDetails/>
        }
        ]
    }
])


const MyRouter=()=>{

    return(
        <div className="border-[#551e53] border-[5px] p-3 m-3 rounded-2xl">
        {/* <Header/> */
        /* <Home/>
        <About/>
        <Contact/>
        <NotFound/> */}
        {/* <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blogs/:id" element={<BlogItemDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter> */}

        <RouterProvider router={myRouter}/>
        </div>
    )
}
export default MyRouter