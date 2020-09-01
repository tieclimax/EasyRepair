import Index from "views/examples/User_view/Index";
import Profile from "components/User/Profile";
import Changepassword from "components/User/Changepassword";
import History from "components/User/History";
import Editprofile from "components/User/Editprofile";
import Service from "components/User/Service";
import State from "components/User/State";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/user",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "ni ni-basket ext-blue",
    component: Service,
    layout: "/user",
  },
  {
    path: "/Profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/Editprofile",
    name: "Editprofile",
    icon: "ni ni-settings text-green",
    component: Editprofile,
    layout: "/user",
  },
  {
    path: "/Changpassword",
    name: "Changpassword",
    icon: "ni ni-key-25 text-brown",
    component: Changepassword,
    layout: "/user",
  },
  {
    path: "/History",
    name: "History",
    icon: "ni ni-collection text-pink",
    component: History,
    layout: "/user",
  },
  {
    path: "/State",
    name: "State_Test",
    icon: "ni ni-world text-indigo",
    component: State,
    layout: "/user",
  },
];
export default routes;
