import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { SignupForm } from './components/SignupForm.tsx';
import { LoginForm } from './components/LoginForm.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true, Component: LoginForm,
      },
      {
        path: "register", Component: SignupForm
      }
    ]   
  },
  {
    path: "/register",
    element: <SignupForm />,
   
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
