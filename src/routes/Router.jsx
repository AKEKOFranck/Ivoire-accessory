import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Women from '../pages/Women';
import Men from '../pages/Men';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: '/Women',
        element: <Women />
      },
      {
        path: '/Men',
        element: <Men />
      },
    ]
  }
]);

export default router;