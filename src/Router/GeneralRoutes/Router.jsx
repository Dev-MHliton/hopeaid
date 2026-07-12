import { createBrowserRouter } from "react-router-dom";

// Imports Routes link 
import Main from "../../layouts/Mainlayouts/Main";
import Home from "../../pages/Homepage/Home";
import Error from "../../pages/Errorpage/Error";
import Login from "../../pages/AuthenticationPages/Login";
import Authentication from "../../layouts/Authlayouts/Authentication";
import HowItWorksPage from "../../pages/MenuItemsPages/HowItWorksPage";
import BlogPage from "../../pages/MenuItemsPages/BlogPage";
import AboutUsPage from "../../pages/MenuItemsPages/AboutUsPage";
import Signup from "../../pages/AuthenticationPages/Signup";
import ContactPage from "../../pages/MenuItemsPages/ContactPage";


export const Router = createBrowserRouter([

    // Home paths
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "works", element: <HowItWorksPage /> },
            { path: "about", element: <AboutUsPage /> },
            { path: "blog", element: <BlogPage /> },
            { path: "contact", element: <ContactPage /> },
        ]
    },

    // Authentication System
    {
        path: "/",
        element: <Authentication />,
        children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
        ]
    },

    // Error path
    { path: "*", element: <Error /> }
])