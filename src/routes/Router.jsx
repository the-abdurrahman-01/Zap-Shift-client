import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
 Component: RootsLayout,
 children:[
    {
        index:true,
        Component: Home
    },
    {
      path: '/coverage',
    Component: Coverage,
    loader:() =>fetch('serviceCenters.json')
    .then(res=>res.json())
    }
 ]
  },
  {
    path: '/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login,
      },
      {
        path:'register',
        Component:Register,
      }
    ]
  }
]);