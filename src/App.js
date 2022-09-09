import Footer from "./components//layout/Footer";
import Main from "./components/layout/Main";
import { ProjectsProvider } from "./context/ProjectsContext";




function App() {

  return (
    <ProjectsProvider>
      <Main />
      <Footer />
    </ProjectsProvider>

  );
}

export default App;
