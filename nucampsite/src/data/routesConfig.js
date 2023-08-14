import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import RootLayout from "../layout/RootLayout"
import CampsiteDirectoryPage from "../pages/CampsiteDirectoryPage"
import AboutPage from "../pages/AboutPage"


export const routesConfig = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children : [
            { index: true, element: <HomePage /> },
            { path: "/contact", element: <ContactPage /> },
            { path: "/directory", element: <CampsiteDirectoryPage /> },
            { path: "/about", element: <AboutPage /> },
        ]

    }
])