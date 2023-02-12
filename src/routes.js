import Home from "./pages/Home";
import Major from "./pages/Major";
import MajorEdit from "./pages/MajorEdit";
import NotFound from "./pages/NotFound";
import NoPermission from "./pages/NoPermission";
import NetworkError from "./pages/NetworkError";

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/major", component: <Major /> },
  { path: "/major/:id", component: <MajorEdit /> },
  { path: "/not-found", component: <NotFound /> },
  { path: "/no-permission", component: <NoPermission />},
  { path: "/network-error", component: <NetworkError /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
