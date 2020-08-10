import Home from "../pages/Home";
import About, { AboutHistory, AboutCulture, AboutContact, AboutJoin } from "../pages/About";
import Profile from "../pages/Profile";
import User from "../pages/User";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        component: AboutHistory,
        exact: true
      },
      {
        path: "/about/culture",
        component: AboutCulture
      },
      {
        path: "/about/contact",
        component: AboutContact
      },
      {
        path: "/about/join",
        component: AboutJoin
      }
    ]
  },
  {
    path: "/profile/:id",
    component: Profile
  },
  {
    path: "/user",
    component: User
  }
]

export default routes;