import routes from "./routes/routes";
import { RouterProvider } from "react-router";


function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
