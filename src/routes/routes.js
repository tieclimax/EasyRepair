import Index from "views/Index.js";
import Profile from "components/Admin/Profile";
import Tables from "components/Manager/Tables";
import Assignjob from "components/Admin/Assignjob"
import Listitem from "components/Manager/Listitem";
import Listitem2 from "components/Manager/Listitem2";
import Changepassword from "components/Admin/Changepassword";
import History from "components/Manager/History";
import Editprofile from "components/Admin/Editprofile";
import Components from "components/Admin/Components";
import Authentication from "components/Admin/Authentication";
import Formlayout from "components/Admin/Formlayout";
import Contacts from "components/Admin/Contacts";
import AddManager from "components/Admin/AddManager"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Profile",
    name: "Admin Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/Editprofile",
    name: "EditProfile",
    icon: "ni ni-settings text-green",
    component: Editprofile,
    layout: "/admin",
  },
  {
    path: "/Changpassword",
    name: "Changpassword",
    icon: "ni ni-key-25 text-brown",
    component: Changepassword,
    layout: "/admin",
  },
  {
    path: "/Assignjob",
    name: "Assignjob",
    icon: "ni ni-send text-blue",
    component: Assignjob,
    layout: "/admin",
  },
  {
    path: "/Components",
    name: "Components-page",
    icon: "ni ni-palette text-purple",
    component: Components,
    layout: "/admin",
  },
  {
    path: "/Authentication",
    name: "Authentication-page",
    icon: "ni ni-lock-circle-open text-red",
    component: Authentication,
    layout: "/admin",
  },
  {
    path: "/Formlayout",
    name: "Formlayout-page",
    icon: "ni ni-ungroup text-pink",
    component: Formlayout,
    layout: "/admin",
  },
  {
    path: "/Contacts",
    name: "Contacts-page",
    icon: "ni ni-world text-indigo",
    component: Contacts,
    layout: "/admin",
  },
  {
    path: "/AddManager",
    component: AddManager,
    layout: "/admin",
  },
];
export default routes;
