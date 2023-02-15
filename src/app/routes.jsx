import Budget from "./components/page/sveden/budget/Budget";
import Common from "./components/page/sveden/common/Common";
import Document from "./components/page/sveden/document/Document";
import Education from "./components/page/sveden/education/Education";
import EduStandarts from "./components/page/sveden/eduStandarts/EduStandarts";
import Employees from "./components/page/sveden/employees/Employees";
import Grants from "./components/page/sveden/grants/Grants";
import Inter from "./components/page/sveden/inter/Inter";
import Ovz from "./components/page/sveden/ovz/Ovz";
import Objects from "./components/page/sveden/objects/Objects";
import PaidEdu from "./components/page/sveden/paidEdu/PaidEdu";
import Struct from "./components/page/sveden/struct/Struct";
import Vacant from "./components/page/sveden/vacant/Vacant";
import Main from "./layouts/main";
import Sveden from "./layouts/sveden/Sveden";

const routes = () => [
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: ":element",
        element: <Main />,
      },
    ],
  },
  {
    path: "sveden",
    element: <Sveden />,
    children: [
      {
        path: "common",
        element: <Common />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "document",
        element: <Document />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "eduStandarts",
        element: <EduStandarts />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "grants",
        element: <Grants />,
      },
      {
        path: "inter",
        element: <Inter />,
      },
      {
        path: "objects",
        element: <Objects />,
      },
      {
        path: "ovz",
        element: <Ovz />,
      },
      {
        path: "paid__edu",
        element: <PaidEdu />,
      },
      {
        path: "struct",
        element: <Struct />,
      },
      {
        path: "vacant",
        element: <Vacant />,
      },
    ],
  },
  /* {
    path: "/events",
    element: <News />,
  }, */
];
export default routes;
