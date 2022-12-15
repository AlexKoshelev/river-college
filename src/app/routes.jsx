import News from "./layouts/news";

import Main from "./layouts/main";

const routes = () => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/events",
    element: <News />,
  },
];
export default routes;
