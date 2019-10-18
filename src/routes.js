import Index from "views/Index.jsx";
import Profile from "views/admin/Profile.jsx";
import Register from "views/auth/Register.jsx";
import Login from "views/auth/Login.jsx";
import Details from "views/admin/Details.jsx";
import Devices from "views/admin/Devices.jsx";
import Settings from "views/admin/Settings.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "Detailed view",
    icon: "ni ni-bullet-list-67 text-red",
    component: Details,
    layout: "/admin"
  },
  {
    path: "/devices",
    name: "Your Devices",
    icon: "ni ni-planet text-blue",
    component: Devices,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "ni ni-settings",
    component: Settings,
    layout: "/admin"
  }
];
export default routes;
