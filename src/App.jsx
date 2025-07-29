import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Sell from './components/Sell';

const MyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MyLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sell',
        element: <Sell />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default App;
