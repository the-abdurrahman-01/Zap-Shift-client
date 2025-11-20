import { createBrowserRouter } from "react-router";
import RootsLayout from "../layouts/RootsLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
 Component: RootsLayout,
 children:[
    {
        index:true,
        Component: Home
    }
 ]
  },
]);