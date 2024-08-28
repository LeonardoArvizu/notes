import LoginPage from "./pages/Login/Login";
import HomePage from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    page: <LoginPage />,
  },
  {
    path: "/home",
    page: <HomePage />,
  },
  {
    path: "*",
    page: <NotFound />,
  },
];

export default routes;
