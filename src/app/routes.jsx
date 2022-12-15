import Main from "./layouts/main";

const routes = () => [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/:element",
        element: <Main />,
      },
    ],
  },
  /* {
    path: "/events",
    element: <News />,
  }, */
];
export default routes;
