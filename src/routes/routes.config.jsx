import Category from "../pages/admin/category";
import HomeAdmin from "../pages/admin/dashboard";
import UserIndex from "../pages/user/UserIndex";
import About from "../pages/user/About";
import UserHome from "../pages/user/UserHome";


import PrivateRouter from "./PrivateRouter";

const routeConfig = [
    {
        path:"/admin",
        element:<PrivateRouter />,
        children:[
            {path:"",element:<HomeAdmin/>},
            {path:"category",element:<Category/>}
        ]
    },
    {
        path:"/",
        element:<UserIndex />,
        children:[
            {path:"/",element:<UserHome/>},
            {path:"/about",element:<About/>}
        ]
    },
    
    
];
export default routeConfig;

