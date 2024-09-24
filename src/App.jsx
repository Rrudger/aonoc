import './css/App.css';
import i18n from './i18n';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Offices from './components/Offices.jsx';

const App = () => {

  return (
    <div className='bg-secondary flex flex-col min-h-screen'>
      <Header />
      <Offices />
      <Footer />
    </div>
  );
}

export default App;
