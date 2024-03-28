import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Router/Home";
import About from "../Components/Router/About";
import App from "../App";
import Contact from "../Components/Router/Contact";
import ListedBookgs from "../Components/Router/ListedBookgs";
import PagesToRead from "../Components/Router/PagesToRead";
import BookDetails from "../Components/Router/BookDetails";
import NotFound from "../Components/Router/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBookgs />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />
       
      },
    ],
  },
]);

export default router;
