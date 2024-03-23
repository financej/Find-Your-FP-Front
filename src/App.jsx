import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { ProtectedRoute } from "./router";
import { Home, LoginPage, ProtectedPage } from "./screens";
import AuthPage from "./screens/unprotected/auth/AuthPage";
import Form from "./screens/unprotected/form/Form";
import { theme } from "./style/theme";
import ChatPage from "./screens/protected/chat/ChatPage";
import HomePage from "./screens/unprotected/Home/HomePage";
import PlannerPage from "./screens/protected/planner/PlannerPage";
import SearchPage from "./screens/protected/search/SearchPage";

//fixme 가시성 개선?
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/api/auth",
        element: <AuthPage />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/planner",
        element: <PlannerPage />,
      },
      {
        path: "/chat/:plannerId",
        element: <ChatPage />,
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className="w-full overflow-auto bg-neutral-50">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
