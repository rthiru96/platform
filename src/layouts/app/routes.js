
import Home from "./asserts/home.png";
import Close from "./asserts/close.png";
import Message from "./asserts/message.png";
import Pie from "./asserts/pie.png";
import Start from "./asserts/start.png";


const adminRoutes = [
  {
    id: 1,
    path: "/",
    sidebarName: "DASHBOARD",
    navbarName: "DASHBOARD",
    icon: Home,
  },
  {
    id: 2,
    path: "/task",
    sidebarName: "TASK",
    navbarName: "TASK",
    icon: Start,
  },
  {
    id: 3,
    path: "/message",
    sidebarName: "MESSAGE",
    navbarName: "MESSAGE",
    icon: Message,
  },
  {
    id: 4,
    path: "/Chart",
    sidebarName: "CHART",
    navbarName: "CHART",
    icon: Pie,
  },
  {
    id: 5,
    path: "/help",
    sidebarName: "HELP",
    navbarName: "HELP",
    icon: Close,
  },
];

export default adminRoutes;
