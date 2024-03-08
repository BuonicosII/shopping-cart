import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <>Hello World</>,
      },
      {
        path: "router-test",
        element: <>Hello Router Test</>,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;