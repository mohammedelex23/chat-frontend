import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { SignupForm } from "./components/SignupForm.tsx";
import { LoginForm } from "./components/LoginForm.tsx";
import { AlertComponent } from "./components/SignupComplete.tsx";
import { RouteNotFound } from "./components/RouteNotFound.tsx";
import { Chats } from "./pages/Chats.tsx";
import { Conversations } from "./components/Conversations.tsx";
import { Settings } from "./components/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <RouteNotFound />,
    children: [
      {
        index: true,
        Component: LoginForm,
      },
      {
        path: "register",
        Component: SignupForm,
      },
      {
        path: "register_completed",
        element: (
          <AlertComponent
            title="Signup Completed!"
            message="please open your email and verify your account"
          />
        ),
      },
      {
        path: "account_verified",
        element: (
          <AlertComponent
            title="Account Verified!"
            message="your account is successfully verified"
          />
        ),
      },
    ],
  },
  {
    path: "/conversations",
    Component: Chats,
    children: [
      {
        index: true,
        Component: Conversations
      },
      {
        path: "/conversations/settings",
        Component: Settings
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
