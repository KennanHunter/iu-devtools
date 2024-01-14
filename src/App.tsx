import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Index } from "./route/Index";
import { Layout } from "./route/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Index /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
