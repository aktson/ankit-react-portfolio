import Footer from "./components//layout/Footer";
import Main from "./components/layout/Main";
import { LangProvider } from "./context/LangContext";
import { ProjectsProvider } from "./context/ProjectsContext";




function App() {

  return (
    <ProjectsProvider>
      <LangProvider>
        <Main />
        <Footer />
      </LangProvider>
    </ProjectsProvider>

  );
}

export default App;
