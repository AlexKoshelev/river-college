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

import Live from "./layouts/live";
import StudentsLive from "./components/page/live/studentsLive/StudentsLive";
import Rest from "./components/page/live/rest/Rest";
import Sport from "./components/page/live/sport/Sport";
import PhotoGallery from "./components/page/live/photoGallery/PhotoGallery";
import OurPride from "./components/page/live/ourPride/OurPride";

import Vacancies from "./components/page/live/vacancies/Vacancies";
import Science from "./components/page/live/science/Science";
import Teachers from "./components/page/live/teachers/Teachers";
import Learning from "./layouts/Learning";

import Practice from "./components/page/learning/Practice/Practice";
import EmploymentService from "./components/page/learning/EmploymentService/EmploymentService";
import About from "./components/page/learning/EmploymentService/about/About";
import Faq from "./components/page/learning/EmploymentService/faq/Faq";
import Partners from "./components/page/learning/EmploymentService/partners/Partners";
import News from "./components/page/learning/EmploymentService/news/New";
import JobFair from "./components/page/learning/EmploymentService/jobFair/JobFair";
import Links from "./components/page/learning/EmploymentService/links/Links";
import VacanciesFrom from "./components/page/learning/EmploymentService/vacanciesFrom/VacanciesFrom";
import Feedback from "./components/page/learning/EmploymentService/feedback/Feedback";

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
  {
    path: "live",
    element: <Live />,
    children: [
      {
        path: "studentsLive",
        element: <StudentsLive />,
      },
      {
        path: "rest",
        element: <Rest />,
      },
      {
        path: "sport",
        element: <Sport />,
      },
      {
        path: "photoGallery",
        element: <PhotoGallery />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "ourPride",
        element: <OurPride />,
      },
      {
        path: "science",
        element: <Science />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
    ],
  },
  {
    path: "learning",
    element: <Learning />,
    children: [
      {
        path: "practice",
        element: <Practice />,
      },
      {
        path: "employmentService",
        element: <EmploymentService />,
        children: [
          {
            path: "",
            element: <About />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "partners",
            element: <Partners />,
          },
          {
            path: "news",
            element: <News />,
          },
          {
            path: "jobFair",
            element: <JobFair />,
          },
          {
            path: "vacanciesFrom",
            element: <VacanciesFrom />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
          {
            path: "links",
            element: <Links />,
          },
        ],
      },
    ],
  },
];
export default routes;
