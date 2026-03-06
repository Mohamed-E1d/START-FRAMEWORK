import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'
import Layout from './Layout/Layout';

function App() {
const router= createBrowserRouter([
{
  path:'',
  element:<Layout/>,
 children: [
{
  path:'',
  element:<Home/>
},{
  path:'/About',
  element:<About/>
},{

  path:'/Portfolio',
  element:<Portfolio/>
}
,{
  path:'/Contact',
  element:<Contact/>
}



 ] ,
}


])

  return (
    <>
<RouterProvider router={router} />
</>
  )
}

export default App
