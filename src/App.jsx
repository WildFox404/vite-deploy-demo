import { useEffect } from "react";
import { createBrowserRouter,RouterProvider,useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
import Austapp from "./components/Product/App/App";
import Austappdisplay from "./components/Product/App/Appdisplay";
import Wifi from "./components/Product/Wifi/Wifi";
import Wifidisplay from "./components/Product/Wifi/Wifidisplay";
import Wifiuse from "./components/Product/Wifi/Wifiuse";
import Myweb from "./components/Product/Myweb/Myweb";
import Electron from "./components/Product/Electron/Electron";
import Gamerain from "./components/Product/Game/Gamerain";
import Gamewantopen from "./components/Product/Game/Gamewantopen";
import Model from "./components/Product/Model/Model";
import { Provider,} from 'react-redux';
import store from "./store";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children:[
      {
        index:true,
        path:"home",
        element:<Home/>
      },
      {
        path:"product",
        element:<Product/>,
        children:[
          {
            index:true,
            path:"app",
            element:<Austapp/>
          },
          {
            path:"appdisplay",
            element:<Austappdisplay/>
          },
          {
            path:"wifi",
            element:<Wifi/>
          },
          {
            path:"wifidisplay",
            element:<Wifidisplay/>
          },
          {
            path:"wifiuse",
            element:<Wifiuse/>
          },
          {
            path:"myweb",
            element:<Myweb/>
          },
          {
            path:"electron",
            element:<Electron/>
          },
          {
            path:"gamerain",
            element:<Gamerain/>
          },
          {
            path:"gamewantopen",
            element:<Gamewantopen/>
          },
          {
            path:"model",
            element:<Model/>
          }
        ]
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
const App = () => {

  return <div>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </div>
}

export default App
