import NavBar from "./components/common/NavBar/NavBar";

import Footer from "./components/ui/footer/footer";
import { useRoutes } from "react-router";
import routes from "./routes";

function App() {
  const element = useRoutes(routes());
  return (
    <>
      <NavBar />
      {element}

      <Footer />
    </>
  );
}

export default App;
