import { LoginForm } from "./pages/auth/Login";
import { createBrowserRouter } from "react-router-dom/dist";
import { RouterProvider } from "react-router-dom/dist";
import Home from "./pages";
import { SignUpForm } from "./pages/auth/SignUp";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/sign-up",
      element: <SignUpForm />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />;
    </Provider>
  );
}

export default App;
