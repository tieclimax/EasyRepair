import Index from "views/examples/Manager_view/Index";
import Profile from "components/Manager/Profile";
import Tables from "components/Manager/Tables";
import Assignjob from "components/Manager/Assignjob";
import Changepassword from "components/Manager/Changepassword";
import History from "components/Manager/History";
import Editprofile from "components/Manager/Editprofile";
import Report from "components/Manager/Report";
import Contacts from "components/Manager/Contacts";
import AddStaff from "components/Manager/AddStaff"
//import Button from "components/Manager/Button";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/manager",
  },
  {
    path: "/Profile",
    name: "Manager Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/manager",
  },

  {
    path: "/Editprofile",
    name: "Dashboard",
    icon: "ni ni-settings text-green",
    component: Editprofile,
    layout: "/manager",
  },
  {
    path: "/Changepassword",
    name: "Changepassword",
    icon: "ni ni-key-25 text-brown",
    component: Changepassword,
    layout: "/manager",
  },
  {
    path: "/Assignjob",
    name: "Assign Job",
    icon: "ni ni-send text-blue",
    component: Assignjob,
    layout: "/manager",
  },
  {
    path: "/Report",
    name: "Report",
    icon: "ni ni-single-copy-04 text-red",
    component: Report,
    layout: "/manager",
  },
  {
    path: "/Tables",
    name: "Tables-Work",
    icon: "ni ni-calendar-grid-58 text-purple",
    component: Tables,
    layout: "/manager",
  },
  {
    path: "/History",
    name: "History",
    icon: "ni ni-collection text-pink",
    component: History,
    layout: "/manager",
  },
  {
    path: "/Contacts",
    name: "Contacts",
    icon: "ni ni-world text-indigo",
    component: Contacts,
    layout: "/manager",
  },
  {
    path: "/AddStaff",
   
   
    component: AddStaff,
    layout: "/manager",
  },
];
export default routes;
