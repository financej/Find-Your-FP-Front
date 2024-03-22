import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Home, LoginPage, ProtectedPage } from "./screens";
import { ProtectedRoute } from "./router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";
import AuthPage from "./screens/unprotected/auth/AuthPage";

//fixme 가시성 개선?
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "test",
            element: <ProtectedPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="w-full overflow-auto bg-neutral-50">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
