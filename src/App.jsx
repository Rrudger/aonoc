import { useState } from 'react';
import './css/App.css';
import i18n from './i18n';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Offices from './components/Offices.jsx';

const App = () => {
  const [page, setPage] = useState('landing');
  const switchPage = () => {
    if (page === 'offices') return <Offices switchPage={setPage} />
    if (page === 'projects') return <Projects switchPage={setPage} />
    if (page.includes('project_')) return <ProjectPage id={page.slice(-1)} switchPage={setPage} />
    return <LandingPage switchPage={setPage} />
  }

  return (
    <div className='bg-secondary flex flex-col min-h-screen'>
      <Header switchPage={setPage}/>
      {switchPage(page)}
      <Footer />
    </div>
  );
}

export default App;
