import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Profile from "../pages/Profile/Profile";
import Topics from "../pages/Topics/Topics";
import NewTopic from "../pages/NewTopic/NewTopic";
import Topic from "../pages/Topic/Topic";
import EditTopic from "../pages/EditTopic/EditTopic";

export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/login";
export const MAIN_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const TOPICS_ROUTE = "/topics"
export const NEW_TOPIC_ROUTE = `${TOPICS_ROUTE}/new`;
export const TOPIC_ROUTE = `${TOPICS_ROUTE}/:id`;
export const EDIT_TOPIC_ROUTE = `${TOPICS_ROUTE}/edit`;

// kol neesu prisijnugęs
export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: REGISTER_ROUTE,
      Component: Register,
    },
    {
      path: TOPICS_ROUTE,
      Component: Topics,
    },
    {
      path: TOPIC_ROUTE,
      Component: Topic,
    }
  ],
};

// kai esu prisijungęs
export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
    {
      path: NEW_TOPIC_ROUTE,
      Component: NewTopic,
    },
    {
      path: TOPIC_ROUTE,
      Component: Topic,
    },
    {
      path: EDIT_TOPIC_ROUTE,
      Component: EditTopic,
    },
    {
      path: TOPICS_ROUTE,
      Component: Topics,
    }
  ]
};