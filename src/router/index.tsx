import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import ResetSuccess from '../pages/ResetSuccess';
import CreateNewPassword from '../pages/CreateNewPassword';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import Messages from '../pages/Messages';
import Calendar from '../pages/Calendar';
import HelpCenter from '../pages/HelpCenter';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/create-new-password',
    element: <CreateNewPassword />,
  },
  {
    path: '/reset-success',
    element: <ResetSuccess />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetail />,
  },
  {
    path: '/messages',
    element: <Messages />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/help',
    element: <HelpCenter />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
