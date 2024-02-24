
import './App.css';
import Signup from './Pages/signup';
import Signin from './Pages/signin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rootlayout from './Pages/Rootlayout';
import MainPage from './Pages/MainPage';
import YourBank from './Pages/YourBank';
import Transfer from './Pages/Transfer';
import Statement from './Pages/statement';
import Profile from './Pages/Profile';
import Aboutus from './Pages/Aboutus';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router=createBrowserRouter([
  {path:"/Signup",element:<Signup/>},
  {path:"/signin",element:<Signin/>},
  // {path:"MainPage",element:<MainPage/>},
  {path:"/",element:<Rootlayout/>,
  children:[
    // {,element:<MainPage></MainPage>},
    {index:true,element:<YourBank/>},
    {path:"Transfer",element:<Transfer/>},
    {path:"Statement",element:<Statement/>},
    {path:"profile",element:<Profile/>},
    {path:"aboutus",element:<Aboutus/>},
]},]);

function App() {
  return <RouterProvider router={router}>
   
  </RouterProvider>
}

export default App;
