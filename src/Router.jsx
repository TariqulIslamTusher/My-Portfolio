import {
    createBrowserRouter,
} from "react-router-dom";
import MainOutlet from "./Outlets/MainOutlet";
import Home from "./Pages/Home/Home";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet></MainOutlet>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);