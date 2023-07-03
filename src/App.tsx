// Styles
import './index.css';

// Components
import { Layout, AboutMe, Projects, Skills, Contact } from './components';

function App() {
  return (
    <Layout>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
