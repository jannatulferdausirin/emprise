
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import NotFound from "./components/layouts/NotFound";
import Activities from "./components/layouts/Activities";
import Special from "./components/layouts/Special";
import SearchIcon from "./components/layouts/SearchIcon";
import Destination from "./components/layouts/Destination";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout/>,
      children:[
       
        {
        path: "/",
        element:<Destination/>,
      },
        {
        path: "/destination",
        element:<Destination/>,
      },
        {
        path: "/activities",
        element:<Activities/>,
      },
        {
        path: "/special",
        element:<Special/>,
      },
        {
        path: "/search",
        element:<SearchIcon/>,
      },
    ]
    },
    {
      path: "*",
      element:<NotFound/>,
    },
   
  ]);

  return (
<>

<RouterProvider router={router} />

</>
  )
}

export default App
