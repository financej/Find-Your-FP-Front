import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Home, LoginPage, ProtectedPage } from "./screens";
import { ProtectedRoute } from "./router";

//fixme 가시성 개선?
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "test",
            element: <ProtectedPage />
          }
        ]
      },
    ]
  },
]);

function App() {
  return (
    <div className='w-full bg-neutral-50 overflow-auto'>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
