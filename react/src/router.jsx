import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/Signup";
import Users from "./views/Users";

const router = createBrowserRouter([
{
    path:'/login',
    element:<Login />
},
{

    path:'/signup',
    element:<Signup />
},
{
    path:'/users',
    element:<Users />
},{
    path:'/',
    element:<Notfound />
}
])