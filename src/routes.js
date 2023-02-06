import Home from "./pages/Home";
import Login from "./pages/Login";
import Major from "./pages/Major";

const routes = [
    {path:"", component: <Home/>},
    {path:"home", component: <Home/>},
    {path:"major", component: <Major/>},
    {path:"login", component: <Login/>}
];
export default routes;