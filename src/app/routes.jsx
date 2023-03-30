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
import AboutPractice from "./components/page/learning/Practice/aboutPracrice/AboutPracice";
import PracticeReviews from "./components/page/learning/Practice/PracticeReviews/Reviews";
import ShedulePractice from "./components/page/learning/Practice/shedulePractice/ShedulePractice";
import Utc from "./components/page/learning/Practice/utc/Utc";
import Enrolly from "./layouts/Enrollee";
import ApplicantsEnrollee from "./components/page/enrollee/applicants/ApplicantsEnrollee";
import OpenDay from "./components/page/enrollee/openDay/OpenDay";
import ApplicantsInfo from "./components/page/enrollee/applicants/applicantsInfo/ApplicantsInfo";
import Message from "./components/page/enrollee/applicants/message/Message";
import Monitoring from "./components/page/enrollee/applicants/monitoring/Monitoring";
import Reception from "./components/page/enrollee/applicants/reception/Reception";
import SubmissionDoc from "./components/page/enrollee/applicants/submissionDoc/SubmissionDoc";
import EducationCosts from "./components/page/enrollee/applicants/reception/educationCosts/EducationCosts";
import ReceptionPlaces from "./components/page/enrollee/applicants/reception/receptionPlaces/ReceptionPlaces";
import ReceptionTiming from "./components/page/enrollee/applicants/reception/receptionTiming/ReceptionTiming";
import Training from "./layouts/Training";
import AboutCdo from "./components/page/training/aboutCdo/AboutCdo";
import AdvancedTraining from "./components/page/training/advancedTraining/AdvancedTraining";
import DistanceLearning from "./components/page/training/distanceLearning/DistanceLearning";
import Home from "./layouts/Home";
import AboutBranch from "./components/page/homePage/aboutBranch/AboutBranch";
import HistoricalReference from "./components/page/homePage/historicalReference/HistoricalReference";
import UniversityNews from "./components/page/homePage/universityNews/UniversityNews";
import UniversityEvents from "./components/page/homePage/universityEvents/UniversityEvents";

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
    path: "enrollee",
    element: <Enrolly />,
    children: [
      {
        path: "applicants",
        element: <ApplicantsEnrollee />,
        children: [
          {
            path: "applicantsInfo",
            element: <ApplicantsInfo />,
          },
          {
            path: "message",
            element: <Message />,
          },
          {
            path: "monitoring",
            element: <Monitoring />,
          },
          {
            path: "reception",
            element: <Reception />,
          },
          {
            path: "submissionDoc",
            element: <SubmissionDoc />,
          },
          {
            path: "educationCosts",
            element: <EducationCosts />,
          },
          {
            path: "receptionPlaces",
            element: <ReceptionPlaces />,
          },
          {
            path: "receptionTiming",
            element: <ReceptionTiming />,
          },
        ],
      },
      {
        path: "open-day",
        element: <OpenDay />,
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
        children: [
          {
            path: "",
            element: <AboutPractice />,
          },
          {
            path: "reviews",
            element: <PracticeReviews />,
          },
          {
            path: "utc",
            element: <Utc />,
          },
          {
            path: "shedule",
            element: <ShedulePractice />,
          },
        ],
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
  {
    path: "training",
    element: <Training />,
    children: [
      {
        path: "aboutCdo",
        element: <AboutCdo />,
      },
      {
        path: "advancedTraining",
        element: <AdvancedTraining />,
      },
      {
        path: "distanceLearning",
        element: <DistanceLearning />,
      },
    ],
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "aboutBranch",
        element: <AboutBranch />,
      },
      {
        path: "historicalReference",
        element: <HistoricalReference />,
      },
      {
        path: "univercityNews",
        element: <UniversityNews />,
      },
      {
        path: "univercityEvents",
        element: <UniversityEvents />,
      },
    ],
  },
];
export default routes;
